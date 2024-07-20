# Networking Concepts in Brief

## IP Address

An IP address uniquely identifies a device on a network using the Internet Protocol (IP). It serves two main purposes:

- **Host Identification**: Identifies the location of a device on a network.
- **Location Addressing**: Facilitates communication between devices by specifying source and destination.

IP addresses come in two formats:

- **IPv4**: Four sets of numbers separated by periods (e.g., 192.168.1.1).
- **IPv6**: Eight groups of hexadecimal numbers separated by colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).

## Port

A port is a communication endpoint that identifies specific processes or services on a device:

- **Port Number**: Ranges from 0 to 65535.
- **Types**:
  - **Well-known ports**: Reserved for specific services (e.g., HTTP on port 80).
  - **Registered ports**: Managed by IANA for applications.
  - **Dynamic or private ports**: Temporary ports used by client-side applications.

## HTTP Methods

HTTP methods define actions to be performed on resources identified by a URI:

- **GET**: Retrieves data from a specified resource.
- **POST**: Submits data to be processed to a specified resource.
- **PUT**: Updates a specified resource with new data.
- **DELETE**: Removes a specified resource.
- **PATCH**: Partially updates a specified resource.
- **HEAD**: Retrieves headers for a specified resource without body content.
- **OPTIONS**: Returns supported HTTP methods for a URL.

## MAC Address

A MAC address is a unique identifier assigned to network interfaces for communication:

- **Purpose**:
  - **Device Identification**: Unique to each network interface card (NIC) or adapter.
  - **Address Resolution**: Determines which device receives data packets within a local network.

MAC addresses are represented as six groups of two hexadecimal digits separated by colons (e.g., 00:1A:2B:3C:4D:5E).
