export default function Login() {
    return (
        <div className="sm:w-2/3 mx-auto">
            <h1 className="text-3xl font-bold">Login Now</h1>
            <form  >
                <div className="py-5 flex flex-wrap gap-4 justify-center">
                    <input name="email" className="input input-info w-4/5" type="email" placeholder="Email" />
                    <input name="password" className="input input-info w-4/5" type="password" placeholder="Password" />
                    <button className="btn btn-info w-4/5 rounded">Login</button>
                </div>
            </form>
        </div>
    )
}
