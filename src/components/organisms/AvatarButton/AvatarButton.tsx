import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

export interface AvatarButtonProps {
  signedIn: boolean;
  user: {
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
    uid: string;
  } | null;
}

export const AvatarButton: React.FC<AvatarButtonProps> = ({
  signedIn,
  user,
}) => {
  return (
    <React.Fragment>
      <IconButton>
        {(() => {
          if (!signedIn || !user) return <Avatar>?</Avatar>;
          if (user.photoURL)
            return <Avatar src={user.photoURL} alt={user.displayName || ''} />;
          if (user.displayName)
            return (
              <Avatar>{user.displayName.slice(0, 1).toUpperCase()}</Avatar>
            );
          return <Avatar>U</Avatar>;
        })()}
      </IconButton>
    </React.Fragment>
  );
};
