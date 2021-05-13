import React, { useContext } from "react"
import { AppContext } from "../../context"
import "./ModalBody.css"

const ModalBody = () => {
    const { formData, setFormData } = useContext(AppContext)

    const handleChange = () => {
        setFormData({
            ...formData,
            agreement: !formData.agreement
        })
    }

    return (
        <div className="modal-content">
            <div className="modal-title">
                <h1>Terms & Conditions</h1>
            </div>

            <div className="agreement-content">
                <h1>PERSONAL INFORMATION WE COLLECT</h1>
                <p>
                    When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”.
                </p>
                <p>
                    We collect Device Information using the following technologies: <br />
                    - “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org">here</a>. <br />
                    - “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps. <br />
                    - “Web beacons”, “tags”, and “pixels” are electronic files used to record information about how you browse the Site. <br/>
                </p>
                <p>
                    Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as “Order Information”.
                </p>
                <p>
                    When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.
                </p>

                <h1>HOW DO WE USE YOUR PERSONAL INFORMATION?</h1>
                <p>
                    We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to: <br />
                    - Communicate with you; <br />
                    - Screen our orders for potential risk or fraud; and <br />
                    - When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services. <br />
                </p>
                <p>
                    We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
                </p>
                                    
                <h1>SHARING YOUR PERSONAL INFORMATION</h1>
                <p>
                    We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store—you can read more about how Shopify uses your Personal Information <a href="https://www.shopify.com/legal/privacy">here</a>.
                </p>
                <p>
                    We also use Google Analytics to help us understand how our customers use the Site — you can read more about how Google uses your Personal Information <a href="https://www.google.com/intl/en/policies/privacy">here</a>. You can also opt-out of Google Analytics <a href="https://tools.google.com/dlpage/gaoptout">here</a>.
                </p>
                <p>
                    Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful requests for information we receive, or to otherwise protect our rights.
                </p>

                <h1>BEHAVIOURAL ADVERTISING</h1>
                <p>
                    As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page <a href="https://www/networkadvertising.org/understanding-online-advertising/how-does-it-work">here</a>. <br />
                    <br></br>
                    You can opt out of targeted advertising by using the links below: <br />
                    - <a href="https://www.facebook.com/settings/?tab=ads">Facebook</a> <br />
                    - <a href="https://www.google.com/settings/ads/anonymous">Google</a>
                </p>
                <p>
                    Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal <a href="http://optout.aboutads.info/">here</a>.
                </p>

                <h1>DO NOT TRACK</h1>
                <p>
                    Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.
                </p>

                <h1>YOUR RIGHTS</h1>
                <p>
                    If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
                </p>
                <p>
                    Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.
                </p>

                <h1>DATA RETENTION</h1>
                <p>
                    When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
                </p>

                <h1>CHANGES</h1>
                <p>
                    We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
                </p>

                <h1>CONTACT US</h1>
                <p>
                    For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e‑mail at hello@mossery.co or by mail using the details provided below:
                    <br></br>
                    <br></br>
                    Mossery
                    <br></br>
                    [Re: Privacy Compliance Officer]
                    <br></br>
                    17, Jalan 51A/225A, Section 51A, Petaling Jaya Selangor MY 46100
                </p>
            </div>
            <div className="checkbox-button">
                <input type="checkbox" checked={formData.agreement} onChange={handleChange} />
                <p>Agree to Terms & Conditions</p>
            </div>
        </div>
    )
}

export default ModalBody