import React, {useState} from 'react';
import {View} from 'react-native';
import ContentInput from '../../components/modal/ContentInput';

import FloatingButton from '../../components/FloatingButton/FloatingButton';
import styles from './Timeline.style';

const Timeline = () => {
  const [contentInputVisible, setContentInputVisible] = useState(false);

  function handleInputToggle() {
    setContentInputVisible(!contentInputVisible);
  }

  function handleSendContent(content) {
    handleInputToggle();
    console.log(content);
  }

  return (
    <View style={styles.container}>
      <FloatingButton name="plus" onPress={handleInputToggle} />
      <ContentInput
        visible={contentInputVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </View>
  );
};

export default Timeline;
