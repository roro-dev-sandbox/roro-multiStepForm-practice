import iconThankyou from "../../../assets/images/icon-thank-you.svg";

export function SuccessMessage() {
    return (
        <div className="flex flex-col justify-center items-center space-y-6 px-18 py-10">
            <img src={iconThankyou} alt="Thank You" />
            <h2 className="text-2xl font-bold text-blue-950 mb-2">Thank You!</h2>
            <p className="text-grey-500 text-center">
                Thanks for confirming your subscription! We hope you have fun using our
                platform. If you ever need support, please feel free to email us at
                support@loremgaming.com.
            </p>
        </div>
    );
}
