// src/components/VirtualizedFeed.js
import React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Link } from 'react-router-dom'; // Added for navigation

const VirtualizedFeed = ({ posts, scrollPosition, setScrollPosition }) => { // Added props for scroll position
  const parentRef = React.useRef();

  // Scroll position restoration
  React.useEffect(() => {
    if (scrollPosition && parentRef.current) {
      parentRef.current.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);

  const rowVirtualizer = useVirtualizer({
    count: posts.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 200,
  });

  return (
    <div 
      ref={parentRef} 
      style={{ height: '100vh', overflow: 'auto' }}
      onScroll={(e) => setScrollPosition(e.target.scrollTop)} // Track scroll position
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const post = posts[virtualRow.index];
          return (
            <div
              key={virtualRow.key}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              {/* Wrap content in Link for navigation */}
              <Link
                to={`/post/${post.id}`}
                state={{ post }}
                style={{ 
                  textDecoration: 'none', 
                  color: 'inherit',
                  display: 'block',
                  height: '100%',
                  padding: '10px'
                }}
              >
                {post.type === 'text' && <TextPost post={post} />}
                {post.type === 'image' && <ImagePost post={post} />}
                {post.type === 'video' && <VideoPost post={post} />}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Post components remain the same
const TextPost = ({ post }) => (
  <div style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
    <h3>{post.title}</h3>
    <p>{post.content}</p>
  </div>
);

const ImagePost = ({ post }) => (
  <div style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
    <h3>{post.title}</h3>
    <img src={post.url} alt={post.title} style={{ maxWidth: '100%' }} />
  </div>
);

const VideoPost = ({ post }) => (
  <div style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
    <h3>{post.title}</h3>
    <video src={post.url} controls style={{ maxWidth: '100%' }} />
  </div>
);

export default VirtualizedFeed;