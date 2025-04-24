import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Interface to define the structure of an Event
export interface Event {
    id: number;
    title: string;
    date: string;
    location: string;
    category: string;
    imageUrl: string;
    soldOut: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class EventService {
    // Mock data for events
    private events: Event[] = [
        {
            id: 1,
            title: 'Omar Khairat Live Performance',
            date: '2024-06-08',
            location: 'Opera House',
            category: 'Concerts',
            imageUrl: 'assets/images/omar-khairat.jpg',
            soldOut: false
        },
        // Add more events here
    ];

    constructor() { }

    // Get all events
    getAllEvents(): Observable<Event[]> {
        return of(this.events);
    }

    // Get events by category
    getEventsByCategory(category: string): Observable<Event[]> {
        return of(this.events.filter(event => event.category === category));
    }

    // Search events by title
    searchEvents(searchTerm: string): Observable<Event[]> {
        return of(this.events.filter(event =>
            event.title.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    }

    // Filter events by date range
    filterByDateRange(startDate: string, endDate: string): Observable<Event[]> {
        return of(this.events.filter(event =>
            event.date >= startDate && event.date <= endDate
        ));
    }
} 