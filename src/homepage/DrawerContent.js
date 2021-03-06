import React, {useState} from 'react';

import {View, StyleSheet, Image, AsyncStorage} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AuthContext} from '../../components/context';
import {scale} from 'react-native-size-matters';
import {
  Account,
  AccountOutline,
  ExitIcon,
  ExpIcon,
  HomeIcon,
  HomeThin,
  LockThin,
  UserThin,
} from '../../svg/icon';

export function DrawerContent({props, navigation}) {
  const paperTheme = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  // const {signOut, toggleTheme} = React.useContext(AuthContext);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={require('../../img/logohvktmm.png')}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>NGUYEN VAN A</Title>
                <Caption style={styles.caption}>@nguyen_a</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>
          <View style={styles.line} />

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => <HomeThin color={color} size={size} />}
              label="Trang ch???"
              onPress={() => {
                navigation.navigate('MainHomepage');
              }}
            />
            <DrawerItem
              icon={({color, size}) => <UserThin color={color} size={size} />}
              label="Trang c?? nh??n"
              onPress={() => {
                navigation.navigate('MainIndividual');
              }}
            />
            {/* <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate('BookmarkScreen');
              }}
            /> */}
            <DrawerItem
              icon={({color, size}) => <LockThin color={color} size={size} />}
              label="?????i m???t kh???u"
              onPress={() => {
                navigation.navigate('ChangePass');
              }}
            />
            {/* <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="H??? tr???"
              onPress={() => {
                navigation.navigate('SupportScreen');
              }}
            /> */}
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
            // onPress={() => {
            //   toggleTheme();
            // }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => <ExitIcon color={'red'} size={size} />}
          label="????ng xu???t"
          onPress={() => {
            AsyncStorage.clear();
            navigation.navigate('LoginScreen');
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  line: {
    backgroundColor: 'black',
    width: '100%',
    height: scale(1 / 2),
    marginTop: scale(5),
  },
});
