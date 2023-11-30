import { Alert } from "react-native";

export default class Login extends Component {
    signIn = async(email, password) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                this.props.navigation.replace('Dashboard');
            })
            .catch(error => {
                Alert.alert(error.message);
            });
    };
}