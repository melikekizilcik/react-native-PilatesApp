import React, {useState} from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from "./DatePickler.styles";

const DatePicker = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date: unknown) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };
  
    return (
      <View>
        <Button title="Show Date Picker" onPress={showDatePicker}/>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    );
}

export default DatePicker;