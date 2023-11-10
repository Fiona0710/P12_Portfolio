function TriskelAnimation({ sharedBasicInfo }) {
  let triskel = sharedBasicInfo
    ? `${process.env.PUBLIC_URL}/${sharedBasicInfo.img}`
    : '';
  return (
    <img
      src={triskel}
      alt='Triskel'
      className='header-icon'
      data-inline='false'
    />
  );
}
export default TriskelAnimation;
