export default function Register() {
    return (
        <div className="sm:w-2/3 mx-auto">
            <h1 className="text-3xl font-bold">Register Now</h1>
            <form  >
                <div className="py-5 flex flex-wrap gap-4 justify-center">
                    <input name="name" className="input input-info w-4/5" type="text" placeholder="Name" />
                    <input name="email" className="input input-info w-4/5" type="email" placeholder="Email" />
                    <input name="password" className="input input-info w-4/5" type="password" placeholder="Password" />
                    <div className="flex w-4/5 gap-2">
                        <select
                            name="countryCode"
                            className="select select-info w-1/4"
                            defaultValue="+966"
                        >
                            <option value="+966">🇸🇦 +966</option>
                            <option value="+20">🇪🇬 +20</option>
                            <option value="+971">🇦🇪 +971</option>
                            <option value="+974">🇶🇦 +974</option>
                            <option value="+965">🇰🇼 +965</option>
                            <option value="+962">🇯🇴 +962</option>
                            <option value="+961">🇱🇧 +961</option>
                            <option value="+1">🇺🇸 +1</option>
                        </select>
                        <input
                            name="phone"
                            className="input input-info w-3/4"
                            type="tel"
                            placeholder="Phone Number"
                        />
                    </div>
                    <button className="btn btn-info w-4/5 rounded">Register</button>
                </div>
            </form>
        </div>
    )
}
