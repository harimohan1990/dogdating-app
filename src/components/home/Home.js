import React from 'react'

export default function Home() {

  const doghome = [
    {
      "id": 1,
      "image": "https://picsum.photos/200/300",
      "name": "John Doe",
      "city": "New York",
      "distance": "5 miles"
    },
    {
      "id": 2,
      "image": "https://picsum.photos/200/300",
      "name": "Jane Smith",
      "city": "Los Angeles",
      "distance": "10 miles"
    },
    {
      "id": 3,
      "image": "https://example.com/person3.jpg",
      "name": "Michael Johnson",
      "city": "Chicago",
      "distance": "3 miles"
    },
    {
      "id": 4,
      "image": "https://example.com/person3.jpg",
      "name": "Emily Brown",
      "city": "San Francisco",
      "distance": "8 miles"
    },
    {
      "id": 5,
      "image": "https://example.com/person3.jpg",
      "name": "David Wilson",
      "city": "Houston",
      "distance": "12 miles"
    },
    {
      "id": 6,
      "image": "https://example.com/person3.jpg",
      "name": "Sarah Martinez",
      "city": "Miami",
      "distance": "7 miles"
    },
    {
      "id": 7,
      "image": "https://example.com/person3.jpg",
      "name": "Daniel Taylor",
      "city": "Seattle",
      "distance": "15 miles"
    },
    {
      "id": 8,
      "image": "https://example.com/person3.jpg",
      "name": "Olivia Anderson",
      "city": "Dallas",
      "distance": "4 miles"
    },
    {
      "id": 9,
      "image": "https://example.com/person3.jpg",
      "name": "James White",
      "city": "Atlanta",
      "distance": "9 miles"
    },
    {
      "id": 10,
      "image": "https://example.com/person3.jpg",
      "name": "Sophia Garcia",
      "city": "Boston",
      "distance": "6 miles"
    }
  ]
  
  return (
    <div>
      {doghome.map((doglist) => {
          
          const img = <img src={doglist.image} />
        console.log("img",)
        return (
          <div key={doglist.id}>
            <img src="https://picsum.photos/200/300" alt="Person" width="100" />
            <p>{doglist.name}</p>
            <p>{doglist.city}</p>
            <p>{doglist.distance}</p>
          </div>
        );
      })}
    </div>
  )
}
  

