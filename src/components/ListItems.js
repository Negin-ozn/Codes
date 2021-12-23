import React from 'react';
import { View, Text, StatusBar, Dimensions, StyleSheet, Image } from 'react-native';
import ScrollList from './ScrollList';

let { width } = Dimensions.get('window');

const ListItems = (props) => {

    return (
        <>
            <StatusBar hidden />

            <View
                style={styles.container}>
                <Text
                    style={styles.containerTxt}>
                    List Items
                </Text>
            </View>

            {/* ---------- Lists With Data ----------  */}

            <ScrollList
                style={{ marginTop: 8 }}
                distanceBetweenItem={12}
                data={props.items}
                keyExtractor={item => item.id}
                renderItem={data => {
                    return (
                        <View
                            elevation={5}
                            style={styles.itemContainer}>
                            <Card item={data.item} />
                        </View>
                    );
                }}
            />
        </>
    );
};

// ------- The card component -------- //

const Card = ({ item }) => {

    return (
        <View style={styles.card}>

            <Image style={styles.image} />

            <View
                style={styles.cardContainer}>
                <Text
                    numberOfLines={1}
                    style={styles.FcardTxt}>
                    {item.username}
                </Text>

                <Text
                    numberOfLines={1}
                    style={styles.ScardTxt}>
                    {item.name}
                </Text>
            </View>

            <View
                style={styles.cardContainer2}>
                <Text
                    style={styles.FcardTxt2}>
                    {item.id}
                </Text>
                <Text style={styles.ScardTxt2}>
                    {item.website}
                </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: '#D3D3D3',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
    },
    containerTxt: {
        fontSize: 32,
        marginLeft: 16,
        marginTop: 50,
        fontWeight: '200',
    },
    itemContainer: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
        height: 70,
        width: width - 30,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 6,
    },
    card: {
        flex: 1,
        flexDirection: 'row'
    },
    image: {
        width: 40,
        height: 40,
        alignSelf: 'center',
        marginLeft: 10,
        borderRadius: 5,
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'column',
        height: 50,
        width: '90%',
        marginHorizontal: 10,
        marginVertical: 8,
    },
    FcardTxt: {
        fontSize: 18,
        fontWeight: '200',
        marginBottom: 4,
        color: '#808080',
    },
    ScardTxt: {
        alignItems: 'flex-end',
        color: '#00ff00'
    },
    cardContainer2: {
        flex: 1,
        flexDirection: 'column',
        height: 50,
        width: '90%',
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: 'flex-end',
    },
    FcardTxt2: {
        marginBottom: 4,
        fontSize: 18,
        fontWeight: '100',
    },
    ScardTxt2: {
        alignItems: 'flex-end',
        color: '#808080',
        fontSize: 12
    }
})

export default ListItems;