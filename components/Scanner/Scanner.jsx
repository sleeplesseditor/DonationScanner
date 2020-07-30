import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import XcooBeePaySDK from '@xcoobee/react-native-xcoobee-payment-sdk';
import { campaignID, formID } from './config.js';

XcooBeePaySDK.setSystemConfig({
    campaignId: campaignID,
    formId: formID
  });
  
  export default function Scanner() {
    const XcooBeePayQR = XcooBeePaySDK.createPayQR(12.34);
  
    return (
      <View style={styles.container}>
        <Text
          style={{
            marginBottom: 20
          }}
        >
          Please Scan and Pay
        </Text>
        {XcooBeePayQR}
        <Text
          style={{
            marginTop: 20
          }}
        >
          Powered by XcooBee
        </Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  