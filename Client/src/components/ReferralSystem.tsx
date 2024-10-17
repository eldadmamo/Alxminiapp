import { useEffect, useState } from "react";
import { saveReferral, fetchReferrals } from "../data/api.tsx"; // Import the API functions

interface ReferralSystemProps {
    initData: string;
    userId: string;
    startParam: string;
}

const ReferralSystem: React.FC<ReferralSystemProps> = ({ userId, startParam }) => {
    const [referrals, setReferrals] = useState<string[]>([]);
    const [referrer, setReferrer] = useState<string | null>(null);
    const INVITE_URL = "https://t.me/hulemekinacarbot/hule";

    useEffect(() => {
        const handleReferral = async () => {
            if (startParam && userId) {
                try {
                    await saveReferral(userId, startParam);  // Save referral using backend
                } catch (error) {
                    console.log("Error saving referral:", error);
                }
            }
        };

        const loadReferrals = async () => {
            if (userId) {
                try {
                    const { referrals, referrer } = await fetchReferrals(userId); // Fetch referrals from backend
                    setReferrals(referrals);
                    setReferrer(referrer);
                } catch (error) {
                    console.log("Error fetching referrals:", error);
                }
            }
        };

        handleReferral();
        loadReferrals();
    }, [userId, startParam]);

    const handleInviteFriend = () => {
        const inviteLink = `${INVITE_URL}?startapp=${userId}`;
        const shareText = "Join me on this awesome Telegram mini app!";
        const fullUrl = `https://t.me/share/url?url=${encodeURIComponent(inviteLink)}&text=${encodeURIComponent(shareText)}`;
        window.open(fullUrl, "_blank");
    };

    const handleCopyLink = () => {
        const inviteLink = `${INVITE_URL}?startapp=${userId}`;
        navigator.clipboard.writeText(inviteLink);
        alert("Invite link copied to clipboard");
    };

    return (
        <div className="w-full max-w-md">
            {referrer && <p className="text-green-500 mb-4">You were referred by user {referrer}</p>}
            <div className="flex flex-col space-y-4">
                <button
                    onClick={handleInviteFriend}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Invite Friend
                </button>
                <button
                    onClick={handleCopyLink}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Copy Invite Link
                </button>
            </div>
            {referrals.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Your Referrals</h2>
                    <ul>
                        {referrals.map((referral, index) => (
                            <li key={index} className="bg-gray-100 p-2 mb-2 rounded">
                                User {referral}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ReferralSystem;