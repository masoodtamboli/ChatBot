import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  boldText: {
    color: '#212121',
    fontFamily: 'OpenSans-Bold',
    fontSize: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  simpleText: {
    color: '#212121',
    fontFamily: 'OpenSans-Regular',
    fontSize: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  simpleText1: {
    color: '#212121',
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  titleText: {
    position: 'absolute',
    alignSelf: 'center',
    color: '#212121',
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 5,
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  bottomView: {
    flex: 1,
    backgroundColor: '#e3dede',
    opacity: 0.95,
    height: 500,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fefefe',
  },
  container1: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fefefe',
  },
  centerizedView: {
    width: '100%',
    top: '20%',
  },
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'},
  loginText: {
    color: '#272727',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center',
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f0f2f9',
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#272727',
  },
  fpText: {
    alignSelf: 'flex-end',
    color: '#272727',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#3ea2f9',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fafafa',
    alignSelf: 'center',
  },
  loginWithBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  iconButton: {
    backgroundColor: '#f0f2f9',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 100,
    flexDirection: 'row',
  },
  signUpTextView: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: '#272727',
    fontSize: 20,
    fontWeight: '500',
  },
  oneline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  onelineinput: {
    width: '49%',
    height: 50,
    backgroundColor: '#f0f2f9',
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#272727',
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  homeContent: {
    height: '100%',
    padding: 16,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    alignItems: 'center',
  },
  profilePhotoImage: {
    height: 40,
    width: 40,
    borderRadius: 5,
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 3,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  usernameText: {
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.7,
    marginLeft: 5,
  },
  learnText: {
    fontSize: 16,
    marginBottom: 30,
    opacity: 0.6,
  },
  searchContainer: {
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  searchInput: {
    height: 40,
    fontSize: 15,
    marginLeft: 5,
    width: '80%',
  },
  dropdownContainer: {
    borderLeftColor: '#ddd',
    borderLeftWidth: 1,
    height: 40,
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  scrollViewContent: {
    paddingTop: 10,
    paddingBottom: 40,
  },
  singleTab: {
    marginRight: 20,
    display: 'flex',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activeTabText: {
    opacity: 0.9,
  },
  inActiveTabText: {
    opacity: 0.3,
  },
  activeTabBottom: {
    height: 10,
    width: 10,
    backgroundColor: '#B79069',
    borderRadius: 50,
  },
  tabBodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryContainer: {
    width: '43%',
    borderRadius: 12,
    marginBottom: 30,
  },
  categoryShortHeight: {
    height: 160,
  },
  categoryLongHeight: {
    height: 200,
  },
  categoryTitletext: {
    fontWeight: 'bold',
    fontSize: 16,
    opacity: 0.9,
  },
  categoryNumbertext: {
    fontSize: 13,
  },
  illustrationImage: {
    flex: 1,
    position: 'relative',
    borderRadius: 10,
    width: '100%',
  },
  backgroundStyle: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 55,
  },
  transparentBg: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  bg0: {
    backgroundColor: '#FDAAB0',
  },
  bg1: {
    backgroundColor: '#E296DE',
  },
  bg2: {
    backgroundColor: '#9E7CF4',
  },
  bg3: {
    backgroundColor: '#96D8CA',
  },
  row: {
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  column: {
    alignSelf: 'center',
    flexDirection: 'column',
    flex: 1,
  },
});

// Light Theme -
// primary : fefefe
// secondary : f0f2f9
// tertiary : 3ea2f9

// Dark Theme

// primary : 272727
// secondary : 303030
// tertiary :  3ea2f9
