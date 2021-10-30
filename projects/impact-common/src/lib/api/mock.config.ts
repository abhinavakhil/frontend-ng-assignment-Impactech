import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
export default {
  GET: {
    '/notifications': {
      handler: getNotifications,
    },
  },
  POST: {
    '/login': {
      handler: login,
    },
    '/register': {
      handler: register,
    },
    '/sendNotification': {
      handler: sendNotifications,
    },
    '/updateProfile': {
      handler: updateUserProfile,
    },
    '/deleteMessage': {
      handler: deleteMessage,
    },
  },
};

/**
 * get notifications
 * @param params
 * @returns
 */
function getNotifications(params) {
  let username = params.get('username');
  let notifications = localStorage.getItem('users-notifications');
  if (notifications != null) {
    let userNotifications = JSON.parse(notifications);
    let length = userNotifications.length;

    // console.log(userNotifications.findIndex((x) => x.username === username));
    // let index = userNotifications.findIndex((x) => x.username === username);
    if (length > -1) {
      return of(
        new HttpResponse({
          status: 200,
          body: userNotifications,
        })
      );
    }
  }

  return of(
    new HttpResponse({
      status: 200,
      body: [],
    })
  );
}

/**
 * send notification
 * @param params
 * @returns
 */
function sendNotifications(params) {
  let notifications = localStorage.getItem('users-notifications');
  if (notifications != null) {
    let userNotifications = JSON.parse(notifications);
    // let index = userNotifications.findIndex(
    //   (x) => x.username === params.recepient
    // );
    // if (index > -1) {
    //   userNotifications[index].notifications.push(params.notification);
    // } else {
    //   userNotifications.push({
    //     username: params.recepient,
    //     notifications: [params.notification],
    //   });
    // }
    userNotifications.push({ ...params });
    localStorage.setItem(
      'users-notifications',
      JSON.stringify(userNotifications)
    );
  } else {
    localStorage.setItem(
      'users-notifications',
      JSON.stringify([
        {
          // username: params.recepient,
          // notifications: [params.notification],
          ...params,
        },
      ])
    );
  }

  return of(
    new HttpResponse({
      status: 200,
      body: {
        status: 'SUCCESS',
        message: 'Notification Sent',
      },
    })
  );
}

/**
 * register new user
 * @param body body
 * @returns new user
 */
function register(body) {
  const registeredUsers = localStorage.getItem('registered-users');

  if (registeredUsers !== null) {
    const users = JSON.parse(registeredUsers);
    if (users.findIndex((x) => x.email === body.email) === -1) {
      users.push(body);

      localStorage.setItem('registered-users', JSON.stringify(users));
      return of(
        new HttpResponse({
          status: 200,
          body: {
            status: 'SUCCESS',
            message: 'User registered successfully',
          },
        })
      );
    } else {
      return of(
        new HttpResponse({
          status: 200,
          body: {
            status: 'FAILED',
            message: 'Username already exists',
          },
        })
      );
    }
  } else {
    localStorage.setItem('registered-users', JSON.stringify([body]));
    return of(
      new HttpResponse({
        status: 200,
        body: {
          status: 'SUCCESS',
          message: 'User registered successfully',
        },
      })
    );
  }
}

/**
 * login user
 * @param body body
 * @returns currently active user
 */
function login(body) {
  let isAuthenticated: boolean = false;
  let userDetails: any = {};
  if (localStorage.getItem('registered-users') != null) {
    let users = JSON.parse(localStorage.getItem('registered-users'));
    let index = users.findIndex(
      (x) => x.email === body.email && x.password === body.password
    );
    if (index > -1) {
      isAuthenticated = true;
      userDetails = users[index];
    }
  }
  return of(
    new HttpResponse({
      status: 200,
      body: {
        authenticated: isAuthenticated,
        userDetails: userDetails,
      },
    })
  );
}

/**
 * update user profile
 * @param body
 * @returns
 */
function updateUserProfile(body) {
  const users = JSON.parse(localStorage.getItem('registered-users'));
  const index = users.findIndex((x) => x.email === body.email);
  const currentUser = users.find((x) => x.email === body.email);
  let user = JSON.parse(localStorage.getItem('currentUser'));
  if (user.authenticated && user.userDetails.email === currentUser.email) {
    const newDetails = body;
    newDetails.password = body.password;
    const newUser = {
      authenticated: true,
      userDetails: newDetails,
    };
    user = newUser;
    users[index] = newDetails;
    const modifyAuth = JSON.stringify(user);
    const modifyUser = JSON.stringify(users);
    localStorage.setItem('currentUser', modifyAuth);
    localStorage.setItem('registered-users', modifyUser);

    return of(
      new HttpResponse({
        status: 200,
        body: {
          status: 'SUCCESS',
          message: 'Profile Updated',
        },
      })
    );
  } else {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          status: 'FAILED',
          message: 'Something went wrong',
        },
      })
    );
  }
}

/** delete Messages based upon id
 * @param body id
 */
function deleteMessage(body) {
  const notifications = localStorage.getItem('users-notifications');
  if (notifications !== null) {
    const usersNotifications = JSON.parse(notifications);

    if (usersNotifications.length > -1) {
      const updatedNotifications = usersNotifications.filter((notification) => {
        return notification.id != body;
      });

      const UsersNotifications = JSON.stringify(updatedNotifications);
      localStorage.setItem('users-notifications', UsersNotifications);
      return of(
        new HttpResponse({
          status: 200,
          body: {
            status: 'SUCCESS',
            message: 'Message deleted succesfully',
          },
        })
      );
    }
  }
  return of(
    new HttpResponse({
      status: 200,
      body: {
        status: 'FAILED',
        message: 'There are no nofication to delete',
      },
    })
  );
}
