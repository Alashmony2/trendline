export default function Register() {
    return (
        <div className="sm:w-2/3 mx-auto">
            <h1 className="text-3xl font-bold">Register Now</h1>
            <form  >
                <div className="py-5 flex flex-wrap gap-4 justify-center">
                    <input name="name" className="input input-info w-4/5" type="text" placeholder="Name" />
                    <input name="email" className="input input-info w-4/5" type="email" placeholder="Email" />
                    <input name="password" className="input input-info w-4/5" type="password" placeholder="Password" />
                    <button className="btn  btn-info w-4/5 rounded">Register</button>
                </div>
            </form>
        </div>
    )
}
