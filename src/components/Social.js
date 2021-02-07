const Social = (props) => {
  return (
    <a href={props.link} target="_blank">
      <i className={props.icon}></i>
    </a>
  );
};

export default Social;
