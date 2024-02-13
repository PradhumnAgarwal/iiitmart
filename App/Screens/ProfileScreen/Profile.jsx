import { View, Text, Image, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../../../utils/Color'
import { useAuth, useUser } from '@clerk/clerk-expo'
import ProfileMenu from '../../Components/ProfileMenu/ProfileMenu'


export default function Profile() {

    const menu = [
        {
            id: 1,
            name: 'Order',
            icon: 'bookmark-o'
        },
        {
            id: 2,
            name: 'Reffer Points',
            icon: 'address-book-o'
        },
        {
            id: 3,
            name: 'Request a Product',
            icon: 'pencil-square-o'
        },
        {
            id: 4,
            name: 'Review',
            icon: 'comment-o'
        },
        {
            id: 5,
            name: 'Get Updates on WhatsApp',
            icon: 'whatsapp'
        },
    ]

    const { user, isLoading } = useUser();
    const { isLoaded, signOut } = useAuth();
    return (
        <ScrollView style={{ backgroundColor: Color.WHITE, minHeight: '100%', display: 'flex', alignContent: 'center', width: '100%' }}>
            <View style={styles.ImgCont}>
                <Image source={{ uri: user?.imageUrl }} style={styles.userImg} />
                <Text style={styles.userName}>{user?.fullName}</Text>
                <Text style={styles.userMail}>{user?.primaryEmailAddress.emailAddress}</Text>
            </View>
            <View style={styles.menuCont}>
                <FlatList
                    data={menu}
                    renderItem={({ item, index }) => (
                        <ProfileMenu item={item} />
                    )}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => signOut()}>
                <Text style={{ color: Color.WHITE, fontSize: 17, fontWeight: '600' }}>LOGOUT</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ImgCont: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        paddingVertical: 20,
        // backgroundColor:'#FFA07A'
    },
    userImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    userName: {
        fontSize: 36,
        color: Color.PRIMARY,
        marginTop: 10
    },
    userMail: {
        fontSize: 16,
        color: Color.GREY
    },
    menuCont: {
        width: '100%',
        display: 'flex',
        // alignItems:'center',
    },
    button:{
        padding:15, 
        backgroundColor: Color.PRIMARY,
        borderRadius: 80,
        alignItems:"center",
        justifyContent:"center",
        elevation: 8,
        marginTop:20,
        marginBottom:20,
       width:'90%',
       marginLeft:'5%'
      }
})