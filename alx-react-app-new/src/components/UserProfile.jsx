const UserProfile = (props) => {
  return (
      <div style={{ border: '1px solid gray', padding: '20px', margin: '20px', borderRadius: '10px', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: 'blue', fontSize: '24px' }}>{props.name}</h2>
          <p style={{ fontSize: '18px' }}>Age: <span style={{ fontWeight: 'bold', color: 'darkred' }}>{props.age}</span></p>
          <p style={{ fontStyle: 'italic', color: 'gray' }}>Bio: {props.bio}</p>
      </div>
  );
};

export default UserProfile;