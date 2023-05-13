import md5 from 'md5';
// md5 for api
export default ({ timeStamp, PRIVATE_KEY, PUBLIC_KEY }) => {
    return md5(`${timeStamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
}

