import React from 'react'
import { MessengerIcon, ContactIcon } from "@/website/elements/Icons";
import { variable } from "styles/variable";
import GridLayout from '@/website/elements/GridLayout';

export default function ContactGroup() {
    return (
			<>
				<div className="ContactGroup">
					<GridLayout>
						<div className="ContactGroup__content">
							<div>
								<MessengerIcon className="icon" style={{ fontSize: 20, cursor: "pointer" }} />
								<ContactIcon className="icon" style={{ fontSize: 20, cursor: "pointer" }} />
							</div>
						</div>
					</GridLayout>
				</div>
				<style jsx global>{`
					.ContactGroup {
						position: fixed;
						bottom: 6vh;
						width: 100%;
						&__content {
							display: flex;
							align-items: flex-end;
							flex-direction: column;
							grid-column: 14/15;
							> div {
								display: flex;
								flex-flow: column nowrap;
							}
						}
						.icon {
							padding: 1.2rem;
							background-color: ${variable.color.white};
							mix-blend-mode: difference;
							border-radius: 50%;
							transition: 0.4s background-color cubic-bezier(0.66, 0, 0.15, 1);
							&:hover {
								background-color: ${variable.color.gold};
								transition: 0.4s background-color cubic-bezier(0.66, 0, 0.15, 1);
								box-shadow: 0.3rem 1.3rem 7rem rgba(19, 18, 18, 0.213);
							}
							&:not(:last-child) {
								margin-bottom: 10px;
							}
						}
					}
				`}</style>
			</>
		);
}
