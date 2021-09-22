#!/bin/sh

if [ -n "$DESTDIR" ] ; then
    case $DESTDIR in
        /*) # ok
            ;;
        *)
            /bin/echo "DESTDIR argument must be absolute... "
            /bin/echo "otherwise python's distutils will bork things."
            exit 1
    esac
fi

echo_and_run() { echo "+ $@" ; "$@" ; }

echo_and_run cd "/home/miguel/Documentos/EUFS/catkin_ws/src/eufs_sim-master/ros_can_sim"

# ensure that Python install destination exists
echo_and_run mkdir -p "$DESTDIR/home/miguel/Documentos/EUFS/catkin_ws/install/lib/python2.7/dist-packages"

# Note that PYTHONPATH is pulled from the environment to support installing
# into one location when some dependencies were installed in another
# location, #123.
echo_and_run /usr/bin/env \
    PYTHONPATH="/home/miguel/Documentos/EUFS/catkin_ws/install/lib/python2.7/dist-packages:/home/miguel/Documentos/EUFS/catkin_ws/build/ros_can_sim/lib/python2.7/dist-packages:$PYTHONPATH" \
    CATKIN_BINARY_DIR="/home/miguel/Documentos/EUFS/catkin_ws/build/ros_can_sim" \
    "/usr/bin/python2" \
    "/home/miguel/Documentos/EUFS/catkin_ws/src/eufs_sim-master/ros_can_sim/setup.py" \
     \
    build --build-base "/home/miguel/Documentos/EUFS/catkin_ws/build/ros_can_sim" \
    install \
    --root="${DESTDIR-/}" \
    --install-layout=deb --prefix="/home/miguel/Documentos/EUFS/catkin_ws/install" --install-scripts="/home/miguel/Documentos/EUFS/catkin_ws/install/bin"
