import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { ArrowLeft, User } from 'lucide-react-native'
import { COLORS, SIZES, icons, images } from '../constants'
import { Stack } from 'expo-router'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

const Home = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
        <Stack.Screen
        options={{
          headerStyle: {backgroundColor:COLORS.lightWhite},
          headerTitle:"",
          headerShadowVisible:false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimention="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimention="100%" />
          ),
        }
        }
         />

         <ScrollView showsVerticalScrollIndicator={false}>
           <View style={{
            flex:1,
            padding:SIZES.medium
           }}>
              <Welcome />
              <Popularjobs />
              <Nearbyjobs />
           </View>
         </ScrollView>
       
    </SafeAreaView>
  )
}

export default Home