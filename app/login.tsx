import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
// import { isClerkAPIResponseError, useSignIn } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

enum SignInType {
  Phone,
  Email,
  Google,
  Apple,
}

const Page = () => {
  const [countryCode, setCountryCode] = useState("+49");
  const [phoneNumber, setPhoneNumber] = useState("");
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
  const router = useRouter();
  // const { signIn } = useSignIn();

  // const onSignIn = async (type: SignInType) => {
  //   if (type === SignInType.Phone) {
  //     try {
  //       const fullPhoneNumber = `${countryCode}${phoneNumber}`;

  //       const { supportedFirstFactors } = await signIn!.create({
  //         identifier: fullPhoneNumber,
  //       });
  //       const firstPhoneFactor: any = supportedFirstFactors.find(
  //         (factor: any) => {
  //           return factor.strategy === "phone_code";
  //         }
  //       );

  //       const { phoneNumberId } = firstPhoneFactor;

  //       await signIn!.prepareFirstFactor({
  //         strategy: "phone_code",
  //         phoneNumberId,
  //       });

  //       router.push({
  //         pathname: "/verify/[phone]",
  //         params: { phone: fullPhoneNumber, signin: "true" },
  //       });
  //     } catch (err) {
  //       console.log("error", JSON.stringify(err, null, 2));
  //       if (isClerkAPIResponseError(err)) {
  //         if (err.errors[0].code === "form_identifier_not_found") {
  //           Alert.alert("Error", err.errors[0].message);
  //         }
  //       }
  //     }
  //   }
  // };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome back</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter the phone number associated with your account
        </Text>
        <View className="my-[40px] flex-row">
          <TextInput
            style={{ backgroundColor: Colors.lightGray }}
            className="p-5 border rounded-2xl text-[20px] mr-[10px]"
            placeholder="Country code"
            placeholderTextColor={Colors.gray}
            value={countryCode}
          />
          <TextInput
            style={{ backgroundColor: Colors.lightGray }}
            className="p-5 border rounded-2xl text-[20px] mr-[10px] flex-1"
            placeholder="Mobile number"
            placeholderTextColor={Colors.gray}
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== "" ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          // onPress={() => onSignIn(SignInType.Phone)}
        >
          <Text style={defaultStyles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <View className="flex-row items-center gap-4">
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: Colors.gray,
            }}
          />
          <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: Colors.gray,
            }}
          />
        </View>

        <TouchableOpacity
          // onPress={() => onSignIn(SignInType.Email)}
          style={defaultStyles.pillButton}
          className="flex-row gap-4 mt-5 bg-white"
        >
          <Ionicons name="mail" size={24} color={"#000"} />
          <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
            Continue with email
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={() => onSignIn(SignInType.Google)}
          style={defaultStyles.pillButton}
          className="flex-row gap-4 mt-5 bg-white"
        >
          <Ionicons name="logo-google" size={24} color={"#000"} />
          <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
            Continue with email
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={() => onSignIn(SignInType.Apple)}
          style={defaultStyles.pillButton}
          className="flex-row gap-4 mt-5 bg-white"
        >
          <Ionicons name="logo-apple" size={24} color={"#000"} />
          <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
            Continue with email
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
export default Page;
