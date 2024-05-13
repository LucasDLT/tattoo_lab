import Iuser from "./User";

interface Ispecialist extends Iuser{
          type:Style;
}
enum Style{
realism="REALISMO",
watercolor="ACUARELA",
old_school="CLASICO",
geometry="GEOMETRICO",
}
export  {Ispecialist, Style}