import s from "./CreateLocation.module.css";
import {useDispatch} from "react-redux";
import { Formik, Form, Field } from 'formik';
import { Select } from 'antd';
import {useState} from "react";
import "antd/dist/antd.css";
import {addLocation} from "../../../store/reducers/locationsReducer";

const { Option } = Select;

const CreateLocation =({onClose})=> {
    const dispatch = useDispatch();
    const [accountingYearInfo, setAccountingYearInfo] = useState(false)
    const [noBroughtInfo, setNoBroughtInfo] = useState(false)
    const [timeZoneInfo, setTimeZoneInfo] = useState(false)
    const [makeDefaultInfo, setMakeDefaultInfo] = useState(false)
    const [usersHasValue, setUsersHasValue] = useState(false)

    const usersOnChange = (e) => {
        if(e.length>0) setUsersHasValue(true)
        else setUsersHasValue(false)
    }


    const handleSubmit = (values) => {
        dispatch(addLocation(values))
    }

    return (
        <>
            <Formik
                initialValues={{
                    locationName: '',
                    days: [],
                    email: '',
                    accountingYear: 'AY',
                    fircalYearStartDay: '1',
                    fircalYearStartMounth: 'January',
                    noBrought: false,
                    weekStart: 'Monday',
                    time: 'Minsk',
                    users: [],
                    makeDefault: false
                }}
                onSubmit={async (values) => handleSubmit(values)}
            >
                <Form>
                    <Field className={s.locationName} id="locationName" name="locationName" placeholder="Location Name" />
                    <div className={s.workWeek}>
                        <span className={s.text}>Workweek<span className={s.star}>*</span></span>
                        <div className={s.daysCheckboxes}>
                            <label className={s.daysLabel}>
                            <Field className={s.fakeCheckbox} type="checkbox" name="days" value="Sunday" />
                                <p>Sunday</p>
                            </label>
                            <label className={s.daysLabel}>
                            <Field className={s.fakeCheckbox} type="checkbox" name="days" value="Monday" />
                                <p>Monday</p>
                            </label>
                            <label className={s.daysLabel}>
                            <Field className={s.fakeCheckbox} type="checkbox" name="days" value="Tuesday" />
                                <p>Tuesday</p>
                            </label>
                            <label className={s.daysLabel}>
                            <Field className={s.fakeCheckbox} type="checkbox" name="days" value="Wednesday" />
                                <p>Wednesday</p>
                            </label>
                            <label className={s.daysLabel}>
                            <Field className={s.fakeCheckbox} type="checkbox" name="days" value="Thursday" />
                                <p>Thursday</p>
                            </label>
                            <label className={s.daysLabel}>
                            <Field className={s.fakeCheckbox} type="checkbox" name="days" value="Friday" />
                                <p>Friday</p>
                            </label>
                            <label className={s.daysLabel}>
                            <Field className={s.fakeCheckbox} type="checkbox" name="days" value="Saturday" />
                                <p>Saturday</p>
                            </label>
                        </div>
                    </div>
                    <div className={s.accountingYear}>
                        <select className={s.accountingYearInput} name="accountingYear">                        >
                            <option value="AY">Accounting year</option>
                            <option value="UED">User Employment Date</option>
                        </select>
                        <div onMouseEnter={() => setAccountingYearInfo(true)} onMouseLeave={() => setAccountingYearInfo(false)} className={s.infoSvg}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.25051 1.01878C6.6938 1.16939 5.15078 1.80236 3.94085 2.78668C3.58496 3.07622 3.02147 3.64419 2.73763 3.99955C2.01992 4.89802 1.43179 6.11333 1.18787 7.20183C1.03469 7.88555 1 8.21793 1 9.00226C1 9.7866 1.03469 10.119 1.18787 10.8027C1.43712 11.9149 2.04059 13.1476 2.78215 14.0591C3.07169 14.415 3.63966 14.9785 3.99502 15.2624C4.89349 15.9801 6.1088 16.5682 7.1973 16.8121C7.88103 16.9653 8.2134 17 8.99774 17C9.78207 17 10.1144 16.9653 10.7982 16.8121C11.6166 16.6287 12.6867 16.1715 13.3899 15.7046C14.6095 14.8949 15.5462 13.8296 16.1857 12.5249C16.5775 11.7256 16.8 11.0098 16.9401 10.0982C17.0177 9.59375 17.0177 8.41078 16.9401 7.90635C16.8 6.9947 16.5775 6.27891 16.1857 5.47967C15.7677 4.62679 15.3017 3.97795 14.6289 3.31203C13.9684 2.65824 13.3634 2.22861 12.5203 1.81473C11.7306 1.42702 10.9995 1.19838 10.125 1.06559C9.73169 1.00588 8.66029 0.979104 8.25051 1.01878ZM9.99972 1.78821C11.59 2.01919 13.0274 2.73536 14.146 3.85398C15.2681 4.97605 15.9634 6.37322 16.2173 8.01594C16.2544 8.25641 16.2705 8.5541 16.2705 9.00226C16.2705 10.1867 16.0379 11.1882 15.5201 12.2337C14.4456 14.4031 12.45 15.8407 9.98406 16.2218C9.51116 16.2949 8.48431 16.2949 8.01141 16.2218C6.36869 15.968 4.97152 15.2726 3.84945 14.1505C2.72736 13.0285 2.03204 11.6313 1.7782 9.98859C1.70511 9.51569 1.70511 8.48884 1.7782 8.01594C1.90726 7.18082 2.12617 6.47589 2.47536 5.77084C3.53066 3.64021 5.51206 2.18984 7.90082 1.79945C8.50479 1.70075 9.36593 1.69612 9.99972 1.78821ZM9.47111 5.03945C9.17693 5.13517 8.89387 5.40261 8.8099 5.66413C8.71161 5.9703 8.82605 6.36758 9.0757 6.58676C9.62604 7.06997 10.5517 6.86334 10.7691 6.2087C10.9648 5.61963 10.5156 5.03288 9.84751 5.00485C9.69881 4.99862 9.5564 5.01171 9.47111 5.03945ZM8.43569 7.72095C8.22145 7.75877 7.36579 8.05182 7.31995 8.10308C7.28469 8.1425 7.17115 8.53252 7.18956 8.55097C7.19529 8.5567 7.29098 8.5328 7.40217 8.49792C7.83866 8.3609 8.24569 8.4244 8.35133 8.64597C8.46358 8.88134 8.4092 9.20889 8.05991 10.4017C7.79006 11.3232 7.7431 11.5418 7.73821 11.8986C7.73505 12.1291 7.74735 12.2101 7.80578 12.3437C7.89803 12.5544 8.12676 12.7677 8.39532 12.8934C8.58461 12.982 8.64141 12.9929 8.97096 13.0047C9.40993 13.0203 9.61834 12.98 10.2032 12.766L10.6103 12.617L10.6708 12.407C10.704 12.2915 10.7238 12.1896 10.7148 12.1805C10.7057 12.1715 10.6363 12.1874 10.5604 12.2158C10.3574 12.2918 9.83063 12.2932 9.69305 12.218C9.36612 12.0396 9.38625 11.7385 9.82587 10.2322C10.1007 9.29068 10.1251 9.17564 10.1279 8.80832C10.132 8.28672 9.96296 8.01638 9.49873 7.8022C9.31777 7.71872 9.25697 7.70733 8.95077 7.69956C8.76133 7.69474 8.52956 7.70438 8.43569 7.72095Z" fill="#00A0EC" stroke="#00A0EC" strokeWidth="0.5"/>
                        </svg></div>
                        {accountingYearInfo && <div className={s.accountingYearInfo}>This setting will determine if your leave balance will be
                            reset based on the accounting year (company's fiscal year) or based on the employee's start
                            date. Besides quotas, your roll-over policy will also be affected according to this
                            setting.</div>}
                    </div>
                    <div className={s.fircalYearStart}>
                        <select className={s.fircalYearStartMounth} name="fircalYearStartMounth">                        >
                            <option value="January">January</option>
                            <option value="February">February</option>
                        </select>
                        <select className={s.fircalYearStartDay} name="fircalYearStartDay">                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <div className={s.noBrought}>
                        <label>
                            <Field className={s.fakeCheckbox} type="checkbox" name="noBrought"/>
                            <p>No Brought Forward Expiry Date</p>
                            <div onMouseEnter={() => setNoBroughtInfo(true)} onMouseLeave={() => setNoBroughtInfo(false)} className={s.infoSvg}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.25051 1.01878C6.6938 1.16939 5.15078 1.80236 3.94085 2.78668C3.58496 3.07622 3.02147 3.64419 2.73763 3.99955C2.01992 4.89802 1.43179 6.11333 1.18787 7.20183C1.03469 7.88555 1 8.21793 1 9.00226C1 9.7866 1.03469 10.119 1.18787 10.8027C1.43712 11.9149 2.04059 13.1476 2.78215 14.0591C3.07169 14.415 3.63966 14.9785 3.99502 15.2624C4.89349 15.9801 6.1088 16.5682 7.1973 16.8121C7.88103 16.9653 8.2134 17 8.99774 17C9.78207 17 10.1144 16.9653 10.7982 16.8121C11.6166 16.6287 12.6867 16.1715 13.3899 15.7046C14.6095 14.8949 15.5462 13.8296 16.1857 12.5249C16.5775 11.7256 16.8 11.0098 16.9401 10.0982C17.0177 9.59375 17.0177 8.41078 16.9401 7.90635C16.8 6.9947 16.5775 6.27891 16.1857 5.47967C15.7677 4.62679 15.3017 3.97795 14.6289 3.31203C13.9684 2.65824 13.3634 2.22861 12.5203 1.81473C11.7306 1.42702 10.9995 1.19838 10.125 1.06559C9.73169 1.00588 8.66029 0.979104 8.25051 1.01878ZM9.99972 1.78821C11.59 2.01919 13.0274 2.73536 14.146 3.85398C15.2681 4.97605 15.9634 6.37322 16.2173 8.01594C16.2544 8.25641 16.2705 8.5541 16.2705 9.00226C16.2705 10.1867 16.0379 11.1882 15.5201 12.2337C14.4456 14.4031 12.45 15.8407 9.98406 16.2218C9.51116 16.2949 8.48431 16.2949 8.01141 16.2218C6.36869 15.968 4.97152 15.2726 3.84945 14.1505C2.72736 13.0285 2.03204 11.6313 1.7782 9.98859C1.70511 9.51569 1.70511 8.48884 1.7782 8.01594C1.90726 7.18082 2.12617 6.47589 2.47536 5.77084C3.53066 3.64021 5.51206 2.18984 7.90082 1.79945C8.50479 1.70075 9.36593 1.69612 9.99972 1.78821ZM9.47111 5.03945C9.17693 5.13517 8.89387 5.40261 8.8099 5.66413C8.71161 5.9703 8.82605 6.36758 9.0757 6.58676C9.62604 7.06997 10.5517 6.86334 10.7691 6.2087C10.9648 5.61963 10.5156 5.03288 9.84751 5.00485C9.69881 4.99862 9.5564 5.01171 9.47111 5.03945ZM8.43569 7.72095C8.22145 7.75877 7.36579 8.05182 7.31995 8.10308C7.28469 8.1425 7.17115 8.53252 7.18956 8.55097C7.19529 8.5567 7.29098 8.5328 7.40217 8.49792C7.83866 8.3609 8.24569 8.4244 8.35133 8.64597C8.46358 8.88134 8.4092 9.20889 8.05991 10.4017C7.79006 11.3232 7.7431 11.5418 7.73821 11.8986C7.73505 12.1291 7.74735 12.2101 7.80578 12.3437C7.89803 12.5544 8.12676 12.7677 8.39532 12.8934C8.58461 12.982 8.64141 12.9929 8.97096 13.0047C9.40993 13.0203 9.61834 12.98 10.2032 12.766L10.6103 12.617L10.6708 12.407C10.704 12.2915 10.7238 12.1896 10.7148 12.1805C10.7057 12.1715 10.6363 12.1874 10.5604 12.2158C10.3574 12.2918 9.83063 12.2932 9.69305 12.218C9.36612 12.0396 9.38625 11.7385 9.82587 10.2322C10.1007 9.29068 10.1251 9.17564 10.1279 8.80832C10.132 8.28672 9.96296 8.01638 9.49873 7.8022C9.31777 7.71872 9.25697 7.70733 8.95077 7.69956C8.76133 7.69474 8.52956 7.70438 8.43569 7.72095Z" fill="#00A0EC" stroke="#00A0EC" stroke-width="0.5"/>
                            </svg></div>
                            {noBroughtInfo && <div className={s.noBroughtInfo}>Each year, the user's rolled over leaves will expire on the date you set. The quotas for each leave type are configured through the Leave Types section for this location and each can be set individually to allow or not allow roll overs.</div>}
                        </label>
                    </div>
                    <div className={s.weekStart}>
                        <select className={s.weekStartInput} name="weekStart">                        >
                        <option value="Monday">Monday</option>
                        <option value="Sunday">Sunday</option>
                        </select>
                    </div>
                    <div className={s.timeZone}>
                        <select className={s.timeZoneInput} name="time">
                            <option value="Vilnius">(GMT+02:00)Vilnius</option>
                            <option value="Khatoum">(GMT+03:00)Khatoum</option>
                            <option value="Nairobi">(GMT+03:00)Nairobi</option>
                            <option value="Syowa">(GMT+03:00)Syowa</option>
                            <option value="Baghdad">(GMT+03:00)Baghdad</option>
                            <option value="Qatar">(GMT+03:00)Qatar</option>
                            <option value="Riyadh">(GMT+03:00)Riyadh</option>
                            <option value="Minsk">(GMT+03:00)Minsk</option>
                        </select>
                        <div onMouseEnter={() => setTimeZoneInfo(true)} onMouseLeave={() => setTimeZoneInfo(false)} className={s.infoSvg}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.25051 1.01878C6.6938 1.16939 5.15078 1.80236 3.94085 2.78668C3.58496 3.07622 3.02147 3.64419 2.73763 3.99955C2.01992 4.89802 1.43179 6.11333 1.18787 7.20183C1.03469 7.88555 1 8.21793 1 9.00226C1 9.7866 1.03469 10.119 1.18787 10.8027C1.43712 11.9149 2.04059 13.1476 2.78215 14.0591C3.07169 14.415 3.63966 14.9785 3.99502 15.2624C4.89349 15.9801 6.1088 16.5682 7.1973 16.8121C7.88103 16.9653 8.2134 17 8.99774 17C9.78207 17 10.1144 16.9653 10.7982 16.8121C11.6166 16.6287 12.6867 16.1715 13.3899 15.7046C14.6095 14.8949 15.5462 13.8296 16.1857 12.5249C16.5775 11.7256 16.8 11.0098 16.9401 10.0982C17.0177 9.59375 17.0177 8.41078 16.9401 7.90635C16.8 6.9947 16.5775 6.27891 16.1857 5.47967C15.7677 4.62679 15.3017 3.97795 14.6289 3.31203C13.9684 2.65824 13.3634 2.22861 12.5203 1.81473C11.7306 1.42702 10.9995 1.19838 10.125 1.06559C9.73169 1.00588 8.66029 0.979104 8.25051 1.01878ZM9.99972 1.78821C11.59 2.01919 13.0274 2.73536 14.146 3.85398C15.2681 4.97605 15.9634 6.37322 16.2173 8.01594C16.2544 8.25641 16.2705 8.5541 16.2705 9.00226C16.2705 10.1867 16.0379 11.1882 15.5201 12.2337C14.4456 14.4031 12.45 15.8407 9.98406 16.2218C9.51116 16.2949 8.48431 16.2949 8.01141 16.2218C6.36869 15.968 4.97152 15.2726 3.84945 14.1505C2.72736 13.0285 2.03204 11.6313 1.7782 9.98859C1.70511 9.51569 1.70511 8.48884 1.7782 8.01594C1.90726 7.18082 2.12617 6.47589 2.47536 5.77084C3.53066 3.64021 5.51206 2.18984 7.90082 1.79945C8.50479 1.70075 9.36593 1.69612 9.99972 1.78821ZM9.47111 5.03945C9.17693 5.13517 8.89387 5.40261 8.8099 5.66413C8.71161 5.9703 8.82605 6.36758 9.0757 6.58676C9.62604 7.06997 10.5517 6.86334 10.7691 6.2087C10.9648 5.61963 10.5156 5.03288 9.84751 5.00485C9.69881 4.99862 9.5564 5.01171 9.47111 5.03945ZM8.43569 7.72095C8.22145 7.75877 7.36579 8.05182 7.31995 8.10308C7.28469 8.1425 7.17115 8.53252 7.18956 8.55097C7.19529 8.5567 7.29098 8.5328 7.40217 8.49792C7.83866 8.3609 8.24569 8.4244 8.35133 8.64597C8.46358 8.88134 8.4092 9.20889 8.05991 10.4017C7.79006 11.3232 7.7431 11.5418 7.73821 11.8986C7.73505 12.1291 7.74735 12.2101 7.80578 12.3437C7.89803 12.5544 8.12676 12.7677 8.39532 12.8934C8.58461 12.982 8.64141 12.9929 8.97096 13.0047C9.40993 13.0203 9.61834 12.98 10.2032 12.766L10.6103 12.617L10.6708 12.407C10.704 12.2915 10.7238 12.1896 10.7148 12.1805C10.7057 12.1715 10.6363 12.1874 10.5604 12.2158C10.3574 12.2918 9.83063 12.2932 9.69305 12.218C9.36612 12.0396 9.38625 11.7385 9.82587 10.2322C10.1007 9.29068 10.1251 9.17564 10.1279 8.80832C10.132 8.28672 9.96296 8.01638 9.49873 7.8022C9.31777 7.71872 9.25697 7.70733 8.95077 7.69956C8.76133 7.69474 8.52956 7.70438 8.43569 7.72095Z" fill="#00A0EC" stroke="#00A0EC" stroke-width="0.5"/>
                        </svg></div>
                        {timeZoneInfo && <div className={s.timeZoneInfo}>This default time zone is used throughout the system. For example for accurately displaying leave information in the calendar and for the system events listed in the Logs.</div>}
                    </div>
                    <div className={s.users}>
                        <Select
                            className={s.usersInput}
                            mode="multiple"
                            placeholder="Add Users"
                            style={{
                                width: '100%',
                            }}
                            onChange={(e) => usersOnChange(e)}
                            name="users">
                            <Option value="Julia_Senko">Julia Senko</Option>
                            <Option value="Aleksandr">Aleksandr</Option>
                            <Option value="Jessica_Monro">Jessica Monro</Option>
                        </Select>
                    </div>
                    {usersHasValue && <div className={s.usersInfo}>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M8.32128 0.777726C7.54178 0.899241 6.8359 1.346 6.39859 1.99463C6.25281 2.21082 1.14797 11.0519 1.01854 11.3124C0.57669 12.2013 0.65963 13.3045 1.23182 14.1489C1.61738 14.7179 2.20648 15.1314 2.88897 15.3122L3.15511 15.3827H8.697C14.6392 15.3827 14.396 15.3889 14.857 15.2246C15.278 15.0746 15.5711 14.8881 15.8945 14.5648C16.1517 14.3076 16.3137 14.0763 16.4794 13.7297C16.6792 13.3116 16.7368 13.0439 16.7368 12.5335C16.7368 12.0241 16.6792 11.7553 16.4812 11.341C16.365 11.098 11.4567 2.57098 11.1588 2.09472C10.8599 1.61671 10.3017 1.1346 9.85062 0.964835C9.37246 0.784865 8.7579 0.709658 8.32128 0.777726ZM8.99445 2.06185C9.36989 2.12171 9.74467 2.34251 9.95958 2.63044C10.0986 2.81674 15.1851 11.6148 15.3228 11.9073C15.5369 12.3618 15.4875 12.9369 15.1952 13.3924C14.9574 13.7629 14.5368 14.0245 14.0823 14.0843C13.913 14.1067 12.1289 14.1144 8.57176 14.1081L3.31166 14.099L3.10063 14.0274C2.23851 13.7348 1.79096 12.7546 2.14946 11.944C2.21249 11.8015 7.23069 3.08901 7.45368 2.73495C7.70234 2.3401 8.21426 2.05462 8.71266 2.03279C8.75571 2.03091 8.88251 2.044 8.99445 2.06185ZM8.54462 5.26995C8.2808 5.33695 8.07991 5.52487 7.9594 5.81744C7.90028 5.96093 7.90364 6.16097 7.98867 7.55515C8.02756 8.19231 8.07731 9.01091 8.09926 9.37423C8.14729 10.1691 8.17694 10.2532 8.45995 10.3965C8.6527 10.4942 8.7878 10.5044 8.95631 10.4341C9.2268 10.3213 9.37164 10.0642 9.36879 9.70202C9.36804 9.60615 9.41344 8.73595 9.4697 7.76828C9.58239 5.8294 9.58295 5.84637 9.39973 5.58004C9.22286 5.32299 8.85753 5.19051 8.54462 5.26995ZM8.52461 11.0736C8.14673 11.1976 7.90761 11.5389 7.93585 11.914C7.96979 12.3642 8.29651 12.6721 8.7419 12.6737C9.05989 12.6748 9.32292 12.5119 9.47158 12.222C9.55149 12.0662 9.56013 11.7141 9.48818 11.5449C9.42118 11.3873 9.25739 11.2104 9.10792 11.1341C8.96999 11.0638 8.65436 11.031 8.52461 11.0736Z"
                                  fill="#F24445"/>
                        </svg>
                        <p>Adding or removing a user might impact the user's configuration and leave information (e.g.
                            the initial brought forward days).</p>
                    </div>}
                    <div className={s.makeDefault}>
                        <label>
                            <Field className={s.fakeCheckbox} type="checkbox" name="makeDefault" />
                            <p>Make This Location Default</p>
                            <div onMouseEnter={() => setMakeDefaultInfo(true)} onMouseLeave={() => setMakeDefaultInfo(false)} className={s.infoSvg}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.25051 1.01878C6.6938 1.16939 5.15078 1.80236 3.94085 2.78668C3.58496 3.07622 3.02147 3.64419 2.73763 3.99955C2.01992 4.89802 1.43179 6.11333 1.18787 7.20183C1.03469 7.88555 1 8.21793 1 9.00226C1 9.7866 1.03469 10.119 1.18787 10.8027C1.43712 11.9149 2.04059 13.1476 2.78215 14.0591C3.07169 14.415 3.63966 14.9785 3.99502 15.2624C4.89349 15.9801 6.1088 16.5682 7.1973 16.8121C7.88103 16.9653 8.2134 17 8.99774 17C9.78207 17 10.1144 16.9653 10.7982 16.8121C11.6166 16.6287 12.6867 16.1715 13.3899 15.7046C14.6095 14.8949 15.5462 13.8296 16.1857 12.5249C16.5775 11.7256 16.8 11.0098 16.9401 10.0982C17.0177 9.59375 17.0177 8.41078 16.9401 7.90635C16.8 6.9947 16.5775 6.27891 16.1857 5.47967C15.7677 4.62679 15.3017 3.97795 14.6289 3.31203C13.9684 2.65824 13.3634 2.22861 12.5203 1.81473C11.7306 1.42702 10.9995 1.19838 10.125 1.06559C9.73169 1.00588 8.66029 0.979104 8.25051 1.01878ZM9.99972 1.78821C11.59 2.01919 13.0274 2.73536 14.146 3.85398C15.2681 4.97605 15.9634 6.37322 16.2173 8.01594C16.2544 8.25641 16.2705 8.5541 16.2705 9.00226C16.2705 10.1867 16.0379 11.1882 15.5201 12.2337C14.4456 14.4031 12.45 15.8407 9.98406 16.2218C9.51116 16.2949 8.48431 16.2949 8.01141 16.2218C6.36869 15.968 4.97152 15.2726 3.84945 14.1505C2.72736 13.0285 2.03204 11.6313 1.7782 9.98859C1.70511 9.51569 1.70511 8.48884 1.7782 8.01594C1.90726 7.18082 2.12617 6.47589 2.47536 5.77084C3.53066 3.64021 5.51206 2.18984 7.90082 1.79945C8.50479 1.70075 9.36593 1.69612 9.99972 1.78821ZM9.47111 5.03945C9.17693 5.13517 8.89387 5.40261 8.8099 5.66413C8.71161 5.9703 8.82605 6.36758 9.0757 6.58676C9.62604 7.06997 10.5517 6.86334 10.7691 6.2087C10.9648 5.61963 10.5156 5.03288 9.84751 5.00485C9.69881 4.99862 9.5564 5.01171 9.47111 5.03945ZM8.43569 7.72095C8.22145 7.75877 7.36579 8.05182 7.31995 8.10308C7.28469 8.1425 7.17115 8.53252 7.18956 8.55097C7.19529 8.5567 7.29098 8.5328 7.40217 8.49792C7.83866 8.3609 8.24569 8.4244 8.35133 8.64597C8.46358 8.88134 8.4092 9.20889 8.05991 10.4017C7.79006 11.3232 7.7431 11.5418 7.73821 11.8986C7.73505 12.1291 7.74735 12.2101 7.80578 12.3437C7.89803 12.5544 8.12676 12.7677 8.39532 12.8934C8.58461 12.982 8.64141 12.9929 8.97096 13.0047C9.40993 13.0203 9.61834 12.98 10.2032 12.766L10.6103 12.617L10.6708 12.407C10.704 12.2915 10.7238 12.1896 10.7148 12.1805C10.7057 12.1715 10.6363 12.1874 10.5604 12.2158C10.3574 12.2918 9.83063 12.2932 9.69305 12.218C9.36612 12.0396 9.38625 11.7385 9.82587 10.2322C10.1007 9.29068 10.1251 9.17564 10.1279 8.80832C10.132 8.28672 9.96296 8.01638 9.49873 7.8022C9.31777 7.71872 9.25697 7.70733 8.95077 7.69956C8.76133 7.69474 8.52956 7.70438 8.43569 7.72095Z" fill="#00A0EC" stroke="#00A0EC" stroke-width="0.5"/>
                            </svg></div>
                            {makeDefaultInfo  && <div className={s.makeDefaultInfo}>By making this Location the default one, all new team members will be automatically added to this Location.</div>}
                        </label>
                    </div>
                    <div className={s.leavePolicy}>
                        Once you've created a Location, assign a <span>Leave Policy</span> to the Location, in order to enable Users to request Leave.  To assign a Leave Policy, go to Location > Leave Policies > Assign Leave Policy.
                    </div>
                    <div className={s.buttons}>
                        <div onClick={() => onClose()} className={s.cancelBtn}>Cancel</div>
                        <button type="submit" className={s.createBtn}>Create</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default CreateLocation