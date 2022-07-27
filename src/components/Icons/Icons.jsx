import { IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EditIcon from '@mui/icons-material/Edit';
import {
    FileDownloadOutlined,
    MonetizationOn,
    PrintOutlined,
    SearchOutlined,
    Close,
    EmojiNatureOutlined,
    ArrowDownwardOutlined,
    ArrowUpwardOutlined,
    VisibilityOutlined,
    VisibilityOffOutlined,
    PersonOutlineOutlined,
    QuestionMarkOutlined,
    HttpsOutlined,
    ExitToAppOutlined,
    AccessTime,
    AttachMoneyOutlined,
    CheckCircle,
    Cancel,
    InfoOutlined,
    CheckBox,
    Dangerous,
    Menu,
    Error,
    FlightTakeoff,
    SavingsOutlined,
    MapsHomeWorkOutlined,
    SchoolOutlined,
    DirectionsCarOutlined,
    StorefrontOutlined,
    ModelTrainingOutlined,
    AccountBoxOutlined,
    EventAvailableOutlined,
    EventBusyOutlined,
    VisibilityOff,
    RemoveRedEye,
    KeyboardArrowDown,
    Notifications,
    Logout,
    DoNotDisturbOn,
} from '@mui/icons-material';
import PropTypes from 'prop-types';

export const validValues = [
    "TTRAN_CPC",
    "MisproductosBlod",
    "TTRAN_TRA",
    "TTRAN_CPS",
    "Pagartarjetas",
    "TTRAN_PTA",
    "TTRAN_SOL",
    "TTRAN_ABL",
    "Checkcircle",
    "Imprimir",
    "Buscar",
    "Pagartarjetas",
    "Close",
    "Default",
    "DowArrow",
    "UpArrow",
    "Person",
    "Question",
    "Lock",
    "Exit",
    "LastMovements",
    "Money",
    'MoneyOut',
    "Check",
    "Cancel",
    "Info",
    "Menu",
    "Error",
    'CheckBox',
    'Danger',
    'Plane',
    'Saving',
    'School',
    'House',
    'Car',
    'Store',
    'Training',
    'AccountBox',
    'Event',
    'EventBusy',
    'ShowEye',
    'HideEye',
    'ArrowDown',
    'Notification',
    'Logout',
    'StandByCheckBox',
]
export const objectImgMenu = {
    //SVG imges was here
    // TTRAN_TRA: '/img/transfer-icon.svg',

}
const stateByName = {
    Checkcircle: CheckCircleIcon,
    Downloads: FileDownloadOutlined,
    MisproductosBlod: MonetizationOn,
    Imprimir: PrintOutlined,
    Buscar: SearchOutlined,
    Close: Close,
    Default: EmojiNatureOutlined,
    DowArrow: ArrowDownwardOutlined,
    UpArrow: ArrowUpwardOutlined,
    Person: PersonOutlineOutlined,
    Question: QuestionMarkOutlined,
    Lock: HttpsOutlined,
    Exit: ExitToAppOutlined,
    LastMovements: AccessTime,
    MoneyOut: AttachMoneyOutlined,
    Check: CheckCircle,
    Cancel: Cancel,
    Info: InfoOutlined,
    CheckBox: CheckBox,
    Danger: Dangerous,
    Menu: Menu,
    Error: Error,
    Money: AttachMoneyIcon,
    Plane: FlightTakeoff,
    Saving: SavingsOutlined,
    School: SchoolOutlined,
    House: MapsHomeWorkOutlined,
    Car: DirectionsCarOutlined,
    Store: StorefrontOutlined,
    Training: ModelTrainingOutlined,
    AccountBox: AccountBoxOutlined,
    Event: EventAvailableOutlined,
    EventBusy: EventBusyOutlined,
    ShowEye: VisibilityOff,
    HideEye: RemoveRedEye,
    ArrowDown: KeyboardArrowDown,
    Notification: Notifications,
    Logout: Logout,
    StandByCheckBox: DoNotDisturbOn,
}
//Icons Provider from icons-material 
export const Icons = ({ color = 'primary', icon, sx = {} }) => {
    const StateByName = stateByName[icon] ? stateByName[icon] : stateByName['Error'];
    return <StateByName color={color} sx={sx} />
}
Icons.propTypes = {
    icon: PropTypes.oneOf(validValues).isRequired,
}
//Icon provider from Svg 
export const SvgIcon = ({ img, height, width }) => {
    return (
        <>
            <img src={img} height={height} width={width} alt={`log${img}`} />
        </>
    )
}
SvgIcon.propTypes = {
    img: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired
}
//Icon Password function
export const IconPassword = ({ showPassword, downPassword, efectIcon }) => {
    return (
        // <InputAdornment position="end">
        <IconButton
            aria-label="password visibility"
            onClick={showPassword}
            onMouseDown={downPassword}
            color='primary'>
            {efectIcon ? <VisibilityOutlined /> : < VisibilityOffOutlined />}
        </IconButton>
        // </InputAdornment>
    );
}
export const IconEdit = () => {
    return (
        <EditIcon color='primary' />
    );
}
IconPassword.propTypes = {
    showPassword: PropTypes.func.isRequired,
    downPassword: PropTypes.func,
    efectIcon: PropTypes.bool.isRequired
}
export default Icons;
