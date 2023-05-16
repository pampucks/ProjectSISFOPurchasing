import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenBarangList from "../screens/barang/ScreenBarangList.js";
import ScreenBarangCreate from "../screens/barang/ScreenBarangCreate.js";
import ScreenBarangEdit from "../screens/barang/ScreenBarangEdit";

const Stack = createNativeStackNavigator();

export const RouterBarangAuthenticated = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ScreenBarangList" component={ScreenBarangList} />
      <Stack.Screen name="ScreenBarangCreate" component={ScreenBarangCreate} />
      <Stack.Screen name="ScreenBarangEdit" component={ScreenBarangEdit} />
    </Stack.Navigator>
  );
};
