import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import FlatButton from '@material-ui/core/FlatButton';
import { showNotification } from 'react-admin';
import { push } from 'react-router-redux';
import { ImageInput, ImageField } from 'react-admin';
import request from "superagent";


class UploadImageField extends Component {
    constructor () {
        super();
        this.state = {
            imageUrl: "/default.jpg",
            showProgress: false,
            showNewPic: false
        }
    }

    onDrop = (acceptedFiles, rejectedFiles) => {
        this.setState({showProgress: true});
        const { record } = this.props;
        //console.log(record);
        // POST to a test endpoint for demo purposes
        const req = request.post('/api/avatar/upload/' + record.id);

        acceptedFiles.forEach(file => {
            req.attach("file", file);
        });
        const token = localStorage.getItem('token');
        req.set("Authorization", `${token}`);
        req.set("enctype","multipart/form-data");
        req.end((err, res) => {
            //alert('yay got ' + JSON.stringify(res));
            if(err){
                alert(err);
                this.setState({
                    showProgress: false
                });
            }
            else{
                this.setState({
                    imageUrl: "/api/avatar/" + record.id + ".jpg?q=" + new Date(),
                    showProgress: false,
                    showNewPic: true
                });
            }
        });
    };

    imageInputOption =  {
        //onDropAccepted: this.onDrop
        onDrop: this.onDrop
    };

    handleClick = () => {
        const { push, record, showNotification } = this.props;
        const updatedRecord = { ...record, is_approved: true };
        fetch(`/comments/${record.id}`, { method: 'PUT', body: updatedRecord })
            .then(() => {
                showNotification('Comment approved');
                push('/comments');
            })
            .catch((e) => {
                console.error(e);
                showNotification('Error: comment not approved', 'warning')
            });
    };

    render() {
        // this.setState({
        //     imageUrl: "/" + record.id + "jpg"
        // });
        const {  record } = this.props;
        return <div>
            <ImageInput options={this.imageInputOption} source="pictures" label="照片：大小要求小于1MB，否则不显示。" multiple={false} maxSize={1048000} accept="image/*" placeholder={<p>将图片拖拽至此或点击上传</p>}>
                        <ImageField source="srcc" title="title" />
                    </ImageInput>
                        {/*{this.state.imageUrl}*/}
                        <div>
                            {this.state.showProgress ? <p><progress/> </p>: null}
                        </div>
                        <div>
                            {this.state.showNewPic ? null : <img src={`/api/avatar/${record.id}.jpg`} alt={""} height="200"/>}
                            {this.state.showNewPic ? <img src={this.state.imageUrl} alt={""} height="200"/> : null}
                        </div>
                </div>;
    }
}

UploadImageField.propTypes = {
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
};

export default connect(null, {
    showNotification,
    push,
})(UploadImageField);