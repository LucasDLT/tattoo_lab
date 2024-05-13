import Iuser from "./User";
import Ispecialist from "./Specialist";
import Iappointment from "./Appointments";

interface Iadmin extends Iuser{
          users: Iuser[];
          specialists: Ispecialist[];
          appointments: Iappointment[];
}
export default Iadmin