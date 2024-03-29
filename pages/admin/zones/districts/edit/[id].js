import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Switch, Select, Tabs } from "antd";
//
import BackButton from "components/admin/BackButton";
import LayoutPage from "components/admin/LayoutPage";
import Section from "@/diginext/containers/Section";
import PageHeader from "@/dashkit/PageHeader";
import AdminButton, { ButtonSize } from "@/dashkit/Buttons";
import { Input, ValidationType } from "@/diginext/form/Form";
import { HorizontalList, ListItem, ListItemSize } from "@/diginext/layout/ListLayout";
import { showMessages, showSuccess, showError, checkPermission } from "@/helpers/helpers";
import ApiCall from "modules/ApiCall";
import { locales, defaultLocale } from "@/constants/locale";
import { getObjectTrans } from "@/helpers/translation";
import { getServerSideProps as TrackingUserSession } from "plugins/next-session/admin";
export const getServerSideProps = TrackingUserSession;

const { TabPane } = Tabs;
const { Option } = Select;

const AdminDistrictEditPage = ({ user }) => {
    const router = useRouter();
    const formInputRef = useRef({});
    const [formInput, setFormInput] = useState({});
    const [myTimeout, setMyTimeout] = useState();
    const { id } = router.query
    //Const
    const [zoneProvinceData, setZoneProvinceData] = useState([]);
    const defaultLabelProvince = "Province";
    const [provinceValue, setProvinceValue] = React.useState(defaultLabelProvince);
    const onchangeProvince = key => {
        setProvinceValue(key);
    };
    //Permissions
    const canEdit   = checkPermission(user, 'zone_district_edit');
    const canDetail = checkPermission(user, 'zone_district_detail');
    //Init load
    useEffect(function() {
        if(!canDetail) {
            router.push('/admin');
        } else {
            fetchListZoneProvince();
            fetchDetail();
        }
    }, []);

    // methods
    const fetchListZoneProvince = async function() {
        let params = {
            router,
            path: `/api/v1/admin/zone-provinces?get=true`,
            token: user.token
        };
        let res = await ApiCall(params);
        if(!res.status) return showError(res);
        let list = res.data;
        setZoneProvinceData(list);
    };

    const fetchDetail = async function() {
        let params = {
            router,
            path: `/api/v1/admin/zone-districts/${id}`,
            token: user.token,
        };
        let res = await ApiCall(params);
        if(!res.status) return showError(res);
        let formInput = res.data;
        setFormInput(formInput);
        setProvinceValue(formInput.zoneProvince)
    };

    // save
    const saveHandler = function() {
        if(!canEdit) return;
        let msgs = [];
        let currentFormInput = {
            active: formInput.active || false,
            name: {
                vi: formInputRef.current['name_vi'].value,
                en: formInputRef.current['name_en'].value,
            },
            zoneProvince: provinceValue,
            code: formInputRef.current.code.value,
            sortOrder: formInputRef.current.sortOrder.value,
            lat: formInputRef.current.lat.value,
            lng: formInputRef.current.lng.value,
        };
        if(msgs.length) {
            return showMessages(msgs);
        }
        // 
        clearTimeout(myTimeout);
        let loginTimeout = setTimeout(async function() {
            let params = {
                router,
                path: `/api/v1/admin/zone-districts/${id}`,
                token: user.token,
                method: 'PUT',
                data: currentFormInput,
                contentType: 2
            };
            let res = await ApiCall(params);
            if(!res.status) return showError(res);
            showSuccess(res);
            router.push('/admin/zones/districts');
        }, 1000);
        setMyTimeout(loginTimeout);
    }

    //Single Upload
    const handleChangeSingleUpload = function(type, data) {
        setFormInput({
            ...formInput,
            ...data
        });
    };

    const header = (
        <PageHeader pretitle="admin" title="District" button={<BackButton />} separator={true}>
            Edit
        </PageHeader>
    );

    return (
        <LayoutPage header={header} user={user}>
            <Section borderBottom={true} style={{ padding: "2rem 0" }}>
                <HorizontalList itemSize={ListItemSize.STRETCH}>
                    <ListItem style={{ marginRight: "1rem" }}>
                        <div className="form-group">
                            <label style={{ marginRight: "15px" }}>Status</label>
                            <Switch
                                checked={formInput.active}
                                onChange={() => {
                                    setFormInput({
                                        ...formInput,
                                        active: !formInput.active
                                    })
                                }}
                            />
                        </div>
                    </ListItem>
                </HorizontalList>
                {provinceValue && zoneProvinceData && zoneProvinceData.length ?
                <HorizontalList itemSize={ListItemSize.STRETCH}>
                    <ListItem style={{ marginRight: "1rem", width: "50%" }}>
                        <label style={{ marginBottom: "15px" }}>Province</label>
                        <Select
                            showSearch
                            optionFilterProp = "children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            value={provinceValue}
                            onChange={onchangeProvince}
                        >
                            {zoneProvinceData.map(province => (
                                <Option key={province.id} value={province.id}>{province.name.vi}</Option>
                            ))}
                        </Select>
                    </ListItem>
                </HorizontalList> : ''}
                
                <HorizontalList itemSize={ListItemSize.STRETCH}>
                    <ListItem style={{ marginRight: "1rem" }}>
                        <Input
                            ref={el => formInputRef.current.code = el}
                            defaultValue={formInput.code}
                            label="Code"
                            placeholder="code"
                            maxLength="255"
                        />
                    </ListItem>
                    <ListItem style={{ marginRight: "1rem" }}>
                        <Input
                            ref={el => formInputRef.current.sortOrder = el}
                            defaultValue={formInput.sortOrder}
                            label="Sort Order"
                            placeholder="Sort Order"
                            maxLength="255"
                            validateConditions={[
                                { type: ValidationType.NOT_EMPTY, errMessage: "is required" },
                                { type: ValidationType.NUMBERS, errMessage: "must be number" }]}
                        />
                    </ListItem>
                </HorizontalList>
                <HorizontalList itemSize={ListItemSize.STRETCH}>
                    <ListItem style={{ marginRight: "1rem" }}>
                        <Input
                            ref={el => formInputRef.current.lat = el}
                            defaultValue={formInput.lat}
                            label="Latitude"
                            placeholder="latitude"
                            maxLength="255"
                            validateConditions={[
                                { type: ValidationType.NUMBERS, errMessage: "must be number" }]}
                        />
                    </ListItem>
                    <ListItem style={{ marginRight: "1rem" }}>
                        <Input
                            ref={el => formInputRef.current.lng = el}
                            defaultValue={formInput.lng}
                            label="Longitude"
                            placeholder="longitude"
                            maxLength="255"
                            validateConditions={[
                                { type: ValidationType.NUMBERS, errMessage: "must be number" }]}
                        />
                    </ListItem>
                </HorizontalList>

                <Tabs defaultActiveKey={defaultLocale} >
                {
                    Object.keys(locales)
                    ? Object.keys(locales).map(function(locale) {
                        return (
                            <TabPane forceRender={true} tab={locales[locale]} key={locale}>
                                <HorizontalList itemSize={ListItemSize.STRETCH}>
                                    <ListItem style={{ marginRight: "1rem" }}>
                                        <Input
                                            ref={el => formInputRef.current[`name_${locale}`] = el}
                                            defaultValue={getObjectTrans(formInput.name, locale)}
                                            label="Name"
                                            placeholder="Name"
                                            maxLength="255"
                                            validateConditions={[{ type: ValidationType.NOT_EMPTY, errMessage: "Bắt buộc" }]}
                                        />
                                    </ListItem>
                                </HorizontalList>
                            </TabPane>
                        )
                    }) : ''
                }
                </Tabs>

                {canEdit ? <AdminButton
                    size={ButtonSize.LARGE}
                    onClick={saveHandler}
                    style={{margin: '20px'}}
                >
                    Save changes
                </AdminButton> : ''}
            </Section>
        </LayoutPage>
    )
};

export default AdminDistrictEditPage;
