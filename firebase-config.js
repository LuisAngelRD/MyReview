/* ============================================================
   Firebase Configuration & Firestore helpers
============================================================ */

const firebaseConfig = {
  apiKey: "AIzaSyCXbjrdMsVbqLoM-EHs8rAHCHdp0o3QuX8",
  authDomain: "myreview-site.firebaseapp.com",
  projectId: "myreview-site",
  storageBucket: "myreview-site.firebasestorage.app",
  messagingSenderId: "607635312348",
  appId: "1:607635312348:web:5503f1bbfb71d3b8d76e19"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const reviewsCollection = db.collection('reviews');

/**
 * Load all reviews from Firestore.
 * Returns an array of review objects.
 */
async function loadReviewsFromDB() {
  const snapshot = await reviewsCollection.orderBy('id', 'asc').get();
  return snapshot.docs.map(doc => ({ _docId: doc.id, ...doc.data() }));
}

/**
 * Save a single review to Firestore (create or update).
 * Uses the review's numeric id to find existing docs.
 */
async function saveReviewToDB(review) {
  // Check if doc already exists by review.id
  const snapshot = await reviewsCollection.where('id', '==', review.id).get();
  if (!snapshot.empty) {
    // Update existing
    await snapshot.docs[0].ref.update(review);
  } else {
    // Create new
    await reviewsCollection.add(review);
  }
}

/**
 * Delete a review from Firestore by its numeric id.
 */
async function deleteReviewFromDB(id) {
  const snapshot = await reviewsCollection.where('id', '==', id).get();
  const batch = db.batch();
  snapshot.docs.forEach(doc => batch.delete(doc.ref));
  await batch.commit();
}

/**
 * Seed Firestore with default reviews if the collection is empty.
 */
async function seedIfEmpty(defaults) {
  const snapshot = await reviewsCollection.limit(1).get();
  if (snapshot.empty) {
    const batch = db.batch();
    defaults.forEach(review => {
      const ref = reviewsCollection.doc();
      batch.set(ref, review);
    });
    await batch.commit();
  }
}

/**
 * Load featured review IDs from Firestore settings.
 * Returns an array of review IDs (numbers), or null if not set.
 */
async function loadFeaturedFromDB() {
  const doc = await db.collection('settings').doc('featured').get();
  if (doc.exists) {
    return doc.data().reviewIds || null;
  }
  return null;
}

/**
 * Save featured review IDs to Firestore settings.
 * @param {number[]} ids - array of 3 review IDs
 */
async function saveFeaturedToDB(ids) {
  await db.collection('settings').doc('featured').set({ reviewIds: ids });
}
