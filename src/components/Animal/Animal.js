export default function Animal(props) {
  return (
    <>
      <div style={{ top: props.top, left: props.left }}>
        Animal: {props.name} {props.type} {props.says}
      </div>
    </>
  );
}
