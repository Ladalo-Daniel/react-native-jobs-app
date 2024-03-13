import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'

import styles from './welcome.style'
import { SIZES, icons } from '../../../constants'
import { useRouter } from 'expo-router'

const jobTypes = ["Full-time", "Part-time", "Contractor", "Doctor", "Lawyer", "Engineer"]

const Welcome = () => {
   const [activeJobType, setActiveJobType] = useState("Full-time")
   const router = useRouter()

  return (
    <View>
       <View style={styles.container}>
          <Text style={styles.userName}>Hello Ladalo</Text>
          <Text style={styles.welcomeMessage}>Find Your Perfect Job!</Text>
       </View>

       <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
             <TextInput
               style={styles.searchInput}
               // value=''
               placeholder='What are you searching for'
               onChange={() => {}}
             />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
              <Image 
                source={icons.search}
                resizeMode="contain"
                style={styles.searchBtnImage}

              />
          </TouchableOpacity>
       </View>

       <View style={styles.tabsContainer}>
         <FlatList
            data={jobTypes}
            renderItem={({item}) => (
               <TouchableOpacity 
               style={styles.tab(activeJobType, item)}
               onPress={() => {
                  setActiveJobType(item);
                  router.push(`/search/${item}`)
               }}
               >
                  <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
               </TouchableOpacity>
            )}
            keyExtractor={item => item}
            contentContainerStyle={{columnGap:SIZES.small, paddingBottom:9}}
            horizontal
          />
       </View>
       
    </View>
  )
}

export default Welcome