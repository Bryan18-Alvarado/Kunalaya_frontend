import { useRouter } from 'expo-router';
import RegisterScreen from '../../components/RegisterScreen';

export default function Register() {
  const router = useRouter();
  return <RegisterScreen onLogin={() => router.push('/home')} />;
}
