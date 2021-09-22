// Auto-generated. Do not edit!

// (in-package eufs_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let BoundingBoxes = require('./BoundingBoxes.js');

//-----------------------------------------------------------

class CheckForObjectsResult {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.id = null;
      this.bounding_boxes = null;
    }
    else {
      if (initObj.hasOwnProperty('id')) {
        this.id = initObj.id
      }
      else {
        this.id = 0;
      }
      if (initObj.hasOwnProperty('bounding_boxes')) {
        this.bounding_boxes = initObj.bounding_boxes
      }
      else {
        this.bounding_boxes = new BoundingBoxes();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type CheckForObjectsResult
    // Serialize message field [id]
    bufferOffset = _serializer.int16(obj.id, buffer, bufferOffset);
    // Serialize message field [bounding_boxes]
    bufferOffset = BoundingBoxes.serialize(obj.bounding_boxes, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type CheckForObjectsResult
    let len;
    let data = new CheckForObjectsResult(null);
    // Deserialize message field [id]
    data.id = _deserializer.int16(buffer, bufferOffset);
    // Deserialize message field [bounding_boxes]
    data.bounding_boxes = BoundingBoxes.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += BoundingBoxes.getMessageSize(object.bounding_boxes);
    return length + 2;
  }

  static datatype() {
    // Returns string type for a message object
    return 'eufs_msgs/CheckForObjectsResult';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e1c1eea05bd032baf074f5342bdbaf2c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    # Result definition
    int16 id
    eufs_msgs/BoundingBoxes bounding_boxes
    
    
    ================================================================================
    MSG: eufs_msgs/BoundingBoxes
    Header header
    Header image_header
    BoundingBox[] bounding_boxes
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    string frame_id
    
    ================================================================================
    MSG: eufs_msgs/BoundingBox
    string Class
    float64 probability
    int64 xmin
    int64 ymin
    int64 xmax
    int64 ymax
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new CheckForObjectsResult(null);
    if (msg.id !== undefined) {
      resolved.id = msg.id;
    }
    else {
      resolved.id = 0
    }

    if (msg.bounding_boxes !== undefined) {
      resolved.bounding_boxes = BoundingBoxes.Resolve(msg.bounding_boxes)
    }
    else {
      resolved.bounding_boxes = new BoundingBoxes()
    }

    return resolved;
    }
};

module.exports = CheckForObjectsResult;
