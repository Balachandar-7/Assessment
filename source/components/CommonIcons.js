import * as React from 'react';
import {
    StyleSheet,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import Icon from 'react-native-vector-icons/Ionicons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import OcticonsIcon from 'react-native-vector-icons/Octicons'
//import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CommonIcons(props) {
    const { name, type, style } = props;
    if (type == 'Entypo') {
        return (
            <EntypoIcon name={name} style={[{ fontSize: 20 }, style]} />
        );
    } else if (type == 'AntDesign') {
        return (
            <AntDesignIcon name={name} style={[{ fontSize: 20 }, style]} />
        );
    } else if (type == 'MaterialIcons') {
        return (
            <MaterialIconsIcon name={name} style={[{ fontSize: 20 }, style]} />
        );
    } else if (type == 'FontAwesome') {
        return (
            <FontAwesomeIcon name={name} style={[{ fontSize: 20 }, style]} />
        );
    } else if (type == 'FontAwesome5') {
        return (
            <FontAwesome5Icon name={name} style={[{ fontSize: 20 }, style]} />
        );
    } else if (type == 'MaterialCommunityIcons') {
        return (
            <MaterialCommunityIcons name={name} style={[{ fontSize: 20 }, style]} />
        );
    } else if (type == 'Feather') {
        return (
            <FeatherIcon name={name} style={[{ fontSize: 20 }, style]} />
        );
    } else if (type == 'Zocial') {
        return (
            <ZocialIcon name={name} style={[{ fontSize: 20 }, style]} />
        );
    } else if (type == 'Fontisto') {
        return (
            <FontistoIcon name={name} style={[{ fontSize: 20 }, style]} />
        );
    }else if (type == 'Octicons') {
        return (
            <OcticonsIcon name={name} style={[{ fontSize: 20 }, style]} />
        );
    } else {
        return (
            <Icon name={name} style={[{ fontSize: 20 }, style]} />
        );
    }

}


const styles = StyleSheet.create({
    icon: {
        color: '#fff',
        fontSize: 20
    },
});


