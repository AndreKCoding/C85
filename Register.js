import { Alert } from "react-native"

export default class Register extends Component {
    registerUser = (email, password, confirmPassword, firstName, lastName) => {
        if (password == confirmPassword) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    Alert.alert('Usuárioo registrado');
                })
                .catch(error => {
                    Alert.alert(error.message);
                });
        } else {
            Alert.alert('As senhas não são iguais');
        }
    };
}