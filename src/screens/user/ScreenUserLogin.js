const { values, set } = require("lodash");
const { useState, useEffect } = require("react");
const { ScrollView } = require("react-native-gesture-handler");
const { SafeAreaView } = require("react-native-safe-area-context");

const ScreenUserLogin = () => {
  const [user, setUser] = useState({});
  const [complete, setComplete] = useState(false);

  const handleChange = () => {
    setUser((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    setComplete(false);
    const debounce = _.debounce(() => {
      setComplete(true);
    }, 500);

    debounce();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {complete && (
        <ScrollView>
          <Text style={{ marginTop: 30 }}>Form Login</Text>
        </ScrollView>
      )}

      {!complete && <Text style={{ marginTop: 30 }}>Loading...</Text>}
    </SafeAreaView>
  );
};
