import * as AiIcons from "react-icons/ai";
import * as CaIcons from "react-icons/cg";
import { IconContext } from "react-icons/lib";
export const sideMenu = [
    {
        label: 'Add Student',
        Icon: AiIcons.AiOutlineUserAdd,
        to: '/Addstudent',
    },
    {
        label: 'Student List',
        Icon: CaIcons.CgUserList,
        to: '/Studentlist',
    }];
