import * as AiIcons from "react-icons/ai";
import * as CaIcons from "react-icons/cg";
import { IconContext } from "react-icons/lib";
export function Admin() {
    return (
        <div>
            <div  class="admin">
                <a href="/Addstudent" class="btn btn-info btn-lg" role="button"><AiIcons.AiOutlineUserAdd></AiIcons.AiOutlineUserAdd> <br />Add student</a>
                <a href="/Studentlist" class="btn btn-primary btn-lg" role="button"><CaIcons.CgUserList></CaIcons.CgUserList> <br /> Student List</a>
                <a href="/" class="btn btn-danger btn-lg" role="button"><AiIcons.AiOutlineRollback></AiIcons.AiOutlineRollback> <br /> Back</a>
            </div>
        </div>
    )
}
