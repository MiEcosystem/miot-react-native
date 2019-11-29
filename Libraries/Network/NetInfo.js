import Platform from '../Utilities/Platform'
import NetInfo from '@react-native-community/netinfo'

if (Platform.OS === 'android') {
    const _fetch = NetInfo.fetch
    NetInfo.fetch = function () {
        return new Promise((resolve, reject) => {
            _fetch()
                .then(state => resolve(state.type.toUpperCase()))
                .catch(err => reject(err))
        })
    }
}

export default NetInfo