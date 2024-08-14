import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
    const {handleRegister} = useContext(AuthContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleRegister(email, password)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
                <h1 className="text-3xl font-semibold">Resister</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="username_2" className="block font-medium">
                            Email
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            id="username_2"
                            placeholder="Enter username"
                            name="email"
                            type="email"
                        />
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="password_2" className="block font-medium">
                            Password
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            id="password_2"
                            placeholder="Enter password"
                            name="password"
                            type="password"
                        />
                    </div>
                    <input type="submit" value='Submit' className="w- rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700 cursor-pointer" />
                </form>
                <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                    I have an account?
                    <Link to='/signIn'><a className="font-semibold underline ">
                        Sign In
                    </a></Link>
                </p>
            </div>
        </div>
    );
};

export default Register;