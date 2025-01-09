import logo from "../../assets/logo.svg";
import logoutIcon from "../../assets/logout-svg.svg";
import helpIcon from "../../assets/help-icon.svg";

const Body = () => {
  return (
    <div>
        <div className="flex flex-row">
            <div className="w-[342px] flex">
                <h6>HR Communication</h6>
                <button disabled>Private</button>
                <p>Project Type: HR Ongoing Specialist: Team Member Name Manager: David Lanagan Member: Internal Project</p>
            </div>
            <div>
            <textarea 
                    className="w-[568px] h-[230px] p-4 border rounded resize-none"
                    placeholder="Project Details Populated from Manager Side of System Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis cursus mauris. Aenean quis enim posuere enim tempus volutpat vitae vel mauris. Pellentesque egestas eu nunc at facilisis. Sed et mollis enim."
                />
            </div>
            <div className="w-[419px] flex gap-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Profile</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Tools</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Files</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Notes</button>
            </div> 
        </div>
    </div>
  );
};

export default Body;
