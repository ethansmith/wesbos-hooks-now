import gql from 'graphql-tag';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { Mutation } from 'react-apollo';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';
import Form from './styles/Form';

const getColor = props => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isDragActive) {
    return '#2196f3';
  }
  return '#eeeeee';
};

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

const Dropzone = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

const CreateItem = props => {
  const [files, setFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      uploadFileToCloudinary(acceptedFiles);
    },
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const [theTitle, setTheTitle] = useState('');
  const [thePrice, setThePrice] = useState('');
  const [theDescription, setTheDescription] = useState('');
  const [theImage, setTheImage] = useState('');
  const [theLargeImage, setTheLargeImage] = useState('');
  const [uploading, setUploading] = useState(false);

  // const uploadFile = async e => {
  //   const data = new FormData();

  //   data.append('file', e.target.files[0]);
  //   data.append('upload_preset', 'sickfits');

  //   setUploading(true);

  //   const res = await fetch(
  //     'https://api.cloudinary.com/v1_1/dxegnq95q/image/upload',
  //     {
  //       method: 'POST',
  //       body: data,
  //     }
  //   );

  //   const theFile = await res.json();

  //   console.log(theFile);

  //   setUploading(false);

  //   setTheImage(theFile.secure_url);

  //   setTheLargeImage(theFile.eager[0].secure_url);
  // };

  const uploadFileToCloudinary = async files => {
    const data = new FormData();

    // TODO: accept multiple files
    data.append('file', files[0]);
    data.append('upload_preset', 'sickfits');

    setUploading(true);

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dxegnq95q/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );

    const theFile = await res.json();

    console.log(theFile);

    setUploading(false);

    setTheImage(theFile.secure_url);

    setTheLargeImage(theFile.eager[0].secure_url);
  };

  return (
    <Mutation mutation={CREATE_ITEM_MUTATION}>
      {(createItem, { loading, error }) => (
        <Form
          onSubmit={async e => {
            // Stop the form from submitting
            e.preventDefault();
            // call the mutation
            const res = await createItem({
              variables: {
                title: theTitle,
                price: parseInt(thePrice),
                description: theDescription,
                image: theImage,
                largeImage: theLargeImage,
              },
            });
            // change them to the single item page
            Router.push({
              pathname: '/item',
              query: { id: res.data.createItem.id },
            });
          }}
        >
          <ErrorMessage error={error} />

          <fieldset disabled={loading} aria-busy={loading}>
            {/* <label htmlFor="file">
              Image
              <input
                type="file"
                id="file"
                name="file"
                placeholder="Upload an image"
                required
                onChange={e => uploadFile(e)}
              />
              {uploading && <p>Uploading...</p>}
              {theImage && (
                <img width="200" src={theImage} alt="Upload Preview" />
              )}
            </label> */}

            <Dropzone
              {...getRootProps(
                { isDragActive, isDragAccept, isDragReject },
                { className: 'dropzone' }
              )}
            >
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </Dropzone>
            <aside style={thumbsContainer}>
              {thumbs}
              {uploading && <p>Uploading...</p>}
            </aside>

            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                autoComplete="off"
                required
                value={theTitle}
                onChange={e => setTheTitle(e.target.value)}
              />
            </label>

            <label htmlFor="Price">
              Price
              <input
                type="number"
                id="Price"
                name="Price"
                placeholder="Price"
                required
                value={thePrice}
                onChange={e => setThePrice(e.target.value)}
              />
            </label>

            <label htmlFor="Description">
              Description
              <textarea
                id="Description"
                name="Description"
                placeholder="Enter a Description"
                required
                value={theDescription}
                onChange={e => setTheDescription(e.target.value)}
              />
            </label>
            <button type="submit">Submit!</button>
          </fieldset>
        </Form>
      )}
    </Mutation>
  );
};

export default CreateItem;

export { CREATE_ITEM_MUTATION };
