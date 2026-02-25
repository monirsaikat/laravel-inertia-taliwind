import AuthLayout from '../../layouts/AuthLayout';
import { useForm } from '@inertiajs/react';
import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';
import { route } from 'ziggy-js';

export default function Login({ title = 'Login' }) {
  const { data, setData, post, processing, errors } = useForm({
    username: '',
    password: '',
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('login.store'));
  };

  return (
    <AuthLayout title={title} description="Login to your Inertia Todo account">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Login to your account
        </h2>

        <form className="space-y-5" onSubmit={submit}>
            <Input
                label="Username"
                type="text"
                name="username"
                placeholder="Enter your username"
                value={data.username}
                onChange={(e) => setData('username', e.target.value)}
                error={errors.username}
                autoComplete="username"
            />

            <Input
                label="Password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                error={errors.password}
                autoComplete="current-password"
            />

            <Button type="submit" disabled={processing} className={processing ? 'opacity-70' : ''}>
                {processing ? 'Logging in...' : 'Login'}
            </Button>

        </form>
    </AuthLayout>
  );
}
