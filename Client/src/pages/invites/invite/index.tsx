import checkedImage from "../../../assets/invite-status/checked.svg"
import notCheckedImage from "../../../assets/invite-status/not-checked.svg"


interface InviteProps {
  name?: string;
  value?: string;
  condition?: string;
  make?: string;
  model?: string;
  year?: string;
  price?: string;
  checked?: boolean;
  imageUrl?: string;
}

export function Invite({ value, checked = false, condition, make, year, price, imageUrl}: InviteProps) {
  return (
      <li className="flex items-center bg-[#2C3649] rounded-[10px] p-5">
          <div className="border-4 border-[#38B8EA] bg-white rounded-lg shadow-lg w-40 h-20 overflow-hidden">
              <img
                  src={imageUrl}
                  alt="Car"
                  className="w-full h-full object-cover"
              />
          </div>
          <div className="flex flex-col gap-[2px] w-full ml-2">
              <div className="flex justify-between flex-1 items-center">
                  <div className="text-sm text-white">
                      {/*<strong>Condition:</strong>*/} {condition}
                  </div>
                  <div className="text-sm text-white">
                      <strong>Make:</strong> {make}
                  </div>
                  <div className="text-sm text-white">
                      {/*<strong>Year: <br/></strong>*/} {year}
                  </div>
                  <div className="text-sm text-white">
                      <strong>Price:</strong> ${price}
                  </div>

                  {checked ? (
                      <img src={checkedImage} alt="Checked" className="w-4 h-4"/>
                  ) : (
                      <img src={notCheckedImage} alt="Not Checked" className="w-4 h-4"/>
                  )}
              </div>

              <div className="flex items-center justify-between p-2">
                  <div className="flex items-center gap-1">

                      <span className="text-[#38B8EA] text-[10px] font-medium">{value}</span>
                  </div>
                  <label className="text-[13px] text-white">Click for more...</label>
                  {checked ? (
                      <span className="text-[13px] text-white">Status: <span
                          className="text-green-500 text-xs">finished</span></span>
                  ) : (
                      <span className="text-[13px] text-white">Status: <span
                          className="text-red-500 text-xs">pending</span></span>
                  )}

              </div>
          </div>
      </li>
  );
}
