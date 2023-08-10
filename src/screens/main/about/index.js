import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Header from 'components/header/indes';
import globalStyles from 'utils/themes/global-styles';
import fonts from 'src/utils/themes/fonts';

export default function About() {
  return (
    <View style={globalStyles.outerContainer}>
      <Header title="About Us" />
      <ScrollView>
        <View style={[globalStyles.innerContainer]}>
          <Text style={styles.text}>
            About Us Welcome to Potato Wise! We're thrilled to have you join us
            on a journey of potato knowledge and exploration. Our app is
            dedicated to providing you with insightful information, helpful
            tips, and a community of potato enthusiasts. At Potato Wise, our
            mission is to cultivate a deeper understanding of the versatile
            potato. From cooking and nutrition to fun facts and growing tips, we
            aim to be your go-to resource for all things potato-related. Key
            Features: - Discover a variety of potato recipes, from classic to
            creative. - Learn about the nutritional benefits and value of
            potatoes in your diet. - Join discussions and share your favorite
            potato-related experiences. - Get expert advice on planting,
            growing, and caring for your own potato plants. We're committed to
            delivering the best possible experience to you. Our dedicated team
            has worked tirelessly to create an engaging and informative platform
            that we hope you'll enjoy using. Your feedback is essential in
            helping us improve Potato Wise. If you have any questions,
            suggestions, or stories to share, please don't hesitate to reach out
            to us at support@potatowiseapp.com. Thank you for choosing Potato
            Wise to enhance your potato journey. Together, let's celebrate the
            world of potatoes in all its wonderful forms. Warm regards, The
            Potato Wise Team.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.RobotoLight,
    fontSize: 14,
    textAlign: 'justify',
    lineHeight: 24,
  },
});
