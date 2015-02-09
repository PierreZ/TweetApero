angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('LoginCtrl', function($scope, auth, $state, store) {
  auth.signin({
    authParams: {
      // This asks for the refresh token
      // So that the user never has to log in again
      scope: 'openid offline_access',
      // This is the device name
      device: 'Mobile device'
    },
    // Make the widget non closeable
    standalone: true
  }, function(profile, token, accessToken, state, refreshToken) {
          // Login was successful
    // We need to save the information from the login
    store.set('profile', profile);
    store.set('token', token);
    store.set('refreshToken', refreshToken);
    $state.go('tab.dash');
  }, function(error) {
    // Oops something went wrong during login:
    console.log("There was an error logging in", error);
  });
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
  $scope.todos = [
      {
        face : '/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : '/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : '/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : '/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : '/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ];
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
