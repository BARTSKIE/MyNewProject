//Contact.js

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import MapView, { Marker } from 'react-native-maps';
import { useFonts } from 'expo-font';
import Sidebar from './Sidebar'; // Import the Sidebar component
import MapView, { Marker } from 'react-native-maps';

export default function ContactUs({ navigation }) {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay: require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
  });
  const [sidebarVisible, setSidebarVisible] = useState(false); // Add state for sidebar

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Sidebar Component */}
      <Sidebar 
        isVisible={sidebarVisible} 
        setVisible={setSidebarVisible} 
        navigation={navigation} 
      />
      
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.headerContainer}>
            {/* Changed to use state instead of navigation.openDrawer */}
            <TouchableOpacity onPress={() => setSidebarVisible(true)} style={styles.burgerButton}>
              <Ionicons name="menu" size={28} color="#222" />
            </TouchableOpacity>
            <Text style={styles.header}>Contact Us</Text>
          </View>

          <View style={styles.goldLine} />

          <View style={styles.formCard}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput style={styles.input} placeholder="Your Name" placeholderTextColor="#999" />

            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="you@example.com"
              placeholderTextColor="#999"
              keyboardType="email-address"
            />

            <Text style={styles.label}>Message</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Type your message here"
              placeholderTextColor="#999"
              multiline
              numberOfLines={5}
            />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Send Message</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>How to Reach Us</Text>
            <Text style={styles.infoText}>
              We're here to help! Whether you have questions about reservations, facilities, or special requests, feel free to contact Don Elmer's Inn and Resort using the information below.
            </Text>

            {/* Fixed Icon + Text Row */}
            <View style={styles.sectionRow}>
              <Ionicons name="call" size={20} color="#FFD700" style={styles.icon} />
              <Text style={styles.sectionHeader}>Call Us</Text>
            </View>
            <Text style={styles.infoText}>Mobile: (09) 123 456 7890 (Smart)</Text>
            <Text style={styles.infoText}>Mobile: (09) 987 654 3210 (Globe)</Text>
            <Text style={styles.infoText}>Landline: (02) 8123 4567</Text>

            <View style={styles.sectionRow}>
              <Ionicons name="mail" size={20} color="#FFD700" style={styles.icon} />
              <Text style={styles.sectionHeader}>Email Us</Text>
            </View>
            <Text style={styles.infoText}>info@donelmers.com</Text>
            <Text style={styles.infoText}>reservations@donelmers.com</Text>

            <View style={styles.sectionRow}>
              <Ionicons name="location" size={20} color="#FFD700" style={styles.icon} />
              <Text style={styles.sectionHeader}>Visit Us</Text>
            </View>
            <Text style={styles.infoText}>P4HJ+9MC, Dao St, Rodriguez (Montalban), 1860 Rizal</Text>
            <Text style={styles.infoText}>View on Google Maps</Text>

            <View style={styles.sectionRow}>
              <Ionicons name="time" size={20} color="#FFD700" style={styles.icon} />
              <Text style={styles.sectionHeader}>Operating Hours</Text>
            </View>
            <Text style={styles.infoText}>Front Desk: 24/7</Text>
            <Text style={styles.infoText}>Pool Area: 7:00 AM - 5:00 PM Daily</Text>

            <View style={styles.sectionRow}>
              <FontAwesome name="facebook" size={20} color="#FFD700" style={styles.icon} />
              <Text style={styles.sectionHeader}>Follow Us</Text>
            </View>
            <View style={styles.socialIcons}>
              <TouchableOpacity style={styles.socialIcon}>
                <FontAwesome name="facebook-square" size={30} color="#777" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIcon}>
                <FontAwesome name="instagram" size={30} color="#777" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.mapCard}>
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                    latitude: 14.7570457,   // Dao St, Rodriguez Rizal
                    longitude: 121.1394541,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                    }}
                >
                    <Marker
                    coordinate={{ latitude: 14.7570457, longitude: 121.1394541 }}
                    title="Don Elmer's Inn and Resort"
                    description="P4HJ+9MC, Dao St, Rodriguez (Montalban), 1860 Rizal"
                    />
                </MapView>
                </View>
                <Text style={styles.locationNote}>
                Our exact location: P4HJ+9MC, Dao St, Rodriguez (Montalban), 1860 Rizal
                </Text>
          </View>

          <Text style={styles.footerText}>
            © 2025 Don Elmer's Inn and Resort. All rights reserved.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingVertical: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  burgerButton: {
    marginRight: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: '600',
    color: '#222',
    fontFamily: 'PlayfairDisplay',
    flex: 1,
    textAlign: 'center',
    marginRight: 34,
  },
  goldLine: {
    height: 4,
    width: 80,
    backgroundColor: '#C8A951',
    alignSelf: 'center',
    marginBottom: 35,
    borderRadius: 2,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#444',
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 14,
    padding: 14,
    marginBottom: 22,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fdfdfd',
  },
  textArea: {
    height: 130,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#C8A951',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  infoBox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 14,
    padding: 16,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    color: '#34495e',
  },
  infoText: {
    fontSize: 15,
    color: '#444',
    marginBottom: 6,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#C8A951',
    marginTop: 14,
    marginBottom: 4,
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 8,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 6,
  },
  socialIcon: {
    marginRight: 16,
  },
  icon: {
    marginRight: 12,
  },
  iconYellow: {
    color: '#C8A951',
    marginRight: 10,
  },
  socialIconGray: {
    color: '#999',
    fontSize: 22,
    marginRight: 16,
  },
  mapCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 14,
    padding: 16,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  mapContainer: {
    height: 220,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 10,
  },
  map: {
    flex: 1,
  },
  locationNote: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
  footerText: {
    marginTop: 35,
    fontSize: 13,
    textAlign: 'center',
    color: '#aaa',
    fontStyle: 'italic',
  },
});